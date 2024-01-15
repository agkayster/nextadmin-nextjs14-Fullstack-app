'use server'; /* if you are using multiple server actions */

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

import { Product, User } from './models';
import { connectToDB } from './utils';
import { signIn } from '../auth';

export const addUser = async (formData) => {
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

export const updateUser = async (formData) => {
	const { id, username, email, password, phone, address, isAdmin, isActive } =
		Object.fromEntries(formData);

	try {
		connectToDB();

		const updateFields = {
			username,
			email,
			password,
			phone,
			address,
			isAdmin,
			isActive,
		};

		/* if user puts an empty string or undefined parameters in our fields above, delete it. Object.keys puts the properties in updateFields in an array format */
		Object.keys(updateFields).forEach(
			(key) =>
				(updateFields[key] === '' || undefined) &&
				delete updateFields[key]
		);

		await User.findByIdAndUpdate(id, updateFields);
	} catch (error) {
		console.log('get error =>', error);
		throw new Error('failed to update user!');
	}

	revalidatePath('/dashboard/users');
	redirect('/dashboard/users');
};

export const deleteUser = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDB();

		await User.findByIdAndDelete(id);
	} catch (error) {
		console.log('get error =>', error);
		throw new Error('failed to delete product');
	}

	revalidatePath('/dashboard/users');
};

//--------------------------------------------------------------------------------------------------------

export const addProduct = async (formData) => {
	const { title, desc, price, stock, color, size, address } =
		Object.fromEntries(formData);

	try {
		connectToDB();

		const newProduct = new Product({
			title,
			desc,
			price,
			stock,
			color,
			size,
			address,
		});

		await newProduct.save();
	} catch (error) {
		console.log('get error =>', error);
		throw new Error('failed to send');
	}

	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
};

export const updateProduct = async (formData) => {
	const { id, title, desc, price, stock, color, size, address } =
		Object.fromEntries(formData);

	try {
		connectToDB();

		const updateFields = {
			title,
			desc,
			price,
			stock,
			color,
			size,
			address,
		};

		/* if user puts an empty string or undefined parameters in our fields above, delete it. Object.keys puts the properties in updateFields in an array format */
		Object.keys(updateFields).forEach(
			(key) =>
				(updateFields[key] === '' || undefined) &&
				delete updateFields[key]
		);

		await Product.findByIdAndUpdate(id, updateFields);
	} catch (error) {
		console.log('get error =>', error);
		throw new Error('failed to update product!');
	}

	revalidatePath('/dashboard/products');
	redirect('/dashboard/products');
};

export const deleteProduct = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDB();

		await Product.findByIdAndDelete(id);
	} catch (error) {
		console.log('get error =>', error);
		throw new Error('failed to delete product');
	}

	revalidatePath('/dashboard/products');
};

//===================================================================================================================>

export const authenticate = async (formData) => {
	const { username, password } = Object.fromEntries(formData);

	// do not put signIn function inside try/catch block
	await signIn('credentials', { username, password });
};
