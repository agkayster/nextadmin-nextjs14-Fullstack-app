import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import { authConfig } from '@/auth.config';
import { connectToDB } from './lib/utils';
import { User } from './lib/models';

const login = async (credentials) => {
	try {
		/* connect to mongoDB */
		connectToDB();

		// find our user from the DB
		const user = await User.findOne({ username: credentials.username });

		// if no user throw error
		if (!user) throw new Error('Invalid credentials!');

		// if there is a user, verify password by comparing credentials password from login form to user password in mongoDB
		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		// if password is not correct, throw error
		if (!isPasswordCorrect) throw new Error('Invalid password!');

		//else if password is correct, return user
		return user;
	} catch (error) {
		console.log('get error =>', error);
		throw new Error('Failed to login!');
	}
};

export const { signIn, signOut, auth } = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				try {
					// pass login function here with the credentials
					const user = await login(credentials);
					return user;
				} catch (error) {
					// if there is an error return null, login process fails
					return null;
				}
			},
		}),
	],
});
