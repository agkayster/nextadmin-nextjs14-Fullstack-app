'use client';

import React, { useState } from 'react';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

const LoginForm = () => {
	const [state, formAction] = useFormState(authenticate, undefined);
	// const [error, setError] = useState();

	// const handleLogin = async (formData) => {
	// 	const data = await authenticate(formData);
	// 	data.error && setError(data.error);
	// };

	return (
		<div className='cont w-full h-screen flex items-center justify-center'>
			<form
				action={formAction}
				// action={handleLogin}
				className='form bg-[#182237] p-[3.13rem] rounded-xl w-[31.25rem] h-[31.25rem] flex flex-col justify-center gap-8'>
				<h1 className='text-center font-bold text-lg'>Login</h1>
				<input
					type='text'
					name='username'
					placeholder='username'
					className='username p-8 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white'
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					className='password p-8 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white'
				/>
				<button
					type='submit'
					className='loginBtn p-8 bg-teal-500 text-white border-none cursor-pointer rounded-md'>
					Login
				</button>
				<p className='error text-center'>{state && state}</p>
			</form>
		</div>
	);
};

export default LoginForm;
