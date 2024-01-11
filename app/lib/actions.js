import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { User } from './models';
import { connectToDB } from './utils';

export const addUser = async (formData) => {
	'use server';
	const { username, email, password, phone, address, isAdmin, isActive } =
		Object.fromEntries(formData);

	try {
		connectToDB();
		const newUser = new User({
			username,
			email,
			password,
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
