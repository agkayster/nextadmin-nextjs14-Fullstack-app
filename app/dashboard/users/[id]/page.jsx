import React from 'react';
import Image from 'next/image';
import { fetchSingleUser } from '@/app/lib/data';

const SingleUserPage = async ({ params }) => {
	/* use params and destructure [id] or whatever you write inside the [] bracket */
	const { id } = params;

	const {
		username,
		email,
		password,
		userImg,
		isAdmin,
		isActive,
		phone,
		address,
		createdAt,
	} = await fetchSingleUser(id);

	return (
		<div className='cont flex gap-[3.13rem] mt-5'>
			<div className='infoContainer flex-1 bg-[#182237] p-5 rounded-xl font-bold text-[#b7bac1] text-center h-fit'>
				{/* position: relative, fits the image into the imageContainer, overflow:hidden allows for border radius */}
				<div className='imageContainer w-[100%] h-[18.75rem] relative rounded-xl overflow-hidden mb-5'>
					{/* use fill, so image fills it's div container */}
					<Image
						src={userImg || `/noavatar.png`}
						alt='user image'
						fill
						className='singleUserImage'
					/>
				</div>
				<h1 className='name'>{username}</h1>
			</div>
			<div className='formContainer flex-3 bg-[#182237] p-5 rounded-xl w-[65%]'>
				<form className='form flex flex-col'>
					<label className='text-xs'>Username</label>
					<input
						type='text'
						name='username'
						placeholder='John Doe'
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
						// className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white'
					/>
					<label className='text-xs'>Email</label>
					<input
						type='email'
						name='email'
						placeholder='JohnDoe@gmail.com'
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
					/>
					<label className='text-xs'>Password</label>
					<input
						type='password'
						name='password'
						placeholder='****'
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
					/>
					<label className='text-xs'>Phone</label>
					<input
						type='phone'
						name='phone'
						placeholder='+4412345'
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
					/>
					<label className='text-xs'>Address</label>
					<textarea
						type='text'
						name='address'
						placeholder='14 downing street'
						className='textarea p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'></textarea>
					<label className='text-xs'>Is Admin?</label>
					<select
						name='isAdmin'
						id='isAdmin'
						className='select p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'>
						<option value={true}>Yes</option>
						<option value={false}>No</option>
					</select>
					<label className='text-xs'>Is Active?</label>
					<select
						name='isActive'
						id='isActive'
						className='select p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'>
						<option value={true}>Yes</option>
						<option value={false}>No</option>
					</select>
					<button
						type='submit'
						className='w-full p-5 bg-teal-500 text-white border-none rounded-md cursor-pointer mt-5'>
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default SingleUserPage;
