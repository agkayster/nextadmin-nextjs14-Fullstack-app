import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

import { User } from './models';
import { connectToDB } from './utils';

export const addUser = async (formData) => {
	'use server';
	const { username, email, password, phone, address, isAdmin, isActive } =
		Object.fromEntries(formData);

	const saltRounds = 10;

	try {
		connectToDB();

		const salt = await bcrypt.genSalt(saltRounds);

		/* hash our password using salt */
		const hashedPassword = await bcrypt.hash(password, salt);

		/*pass our hashed password into our model, which is then saved in our Database */
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			phone,
			address,
			isAdmin,
			isActive,
		});

		await newUser.save();
	} catch (error) {
		console.log('get error =>', error);
		throw new Error('failed to send');
	}

	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
};
