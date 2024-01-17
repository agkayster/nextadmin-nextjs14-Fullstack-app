import { addUser } from '@/app/lib/actions';
import React from 'react';

const AddUsersPage = () => {
	return (
		<div className='cont bg-[#182237] p-5 rounded-xl mt-5'>
			<form
				action={addUser}
				className='form flex flex-wrap justify-between'>
				<input
					className='username p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
					type='text'
					placeholder='username'
					name='username'
					required
				/>
				<div
					className='imgCont flex flex-col w-fit gap-2.5 bg-[#151c2c] p-8 rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'>
					<label htmlFor=''>Select Image to upload</label>
					<input type='file' id='userImg' name='userImg' required />
				</div>
				<input
					type='email'
					placeholder='email'
					name='email'
					className='p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
					required
				/>
				<input
					type='password'
					placeholder='password'
					name='password'
					className='p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
					required
				/>
				<input
					type='phone'
					placeholder='phone'
					name='phone'
					className='p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
				/>
				<select
					name='isAdmin'
					id='isAdmin'
					className='p-8 bg-[#151c2c] text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a] w-[45%]'>
					<option value={false}>Is Admin?</option>
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<select
					name='isActive'
					id='isActive'
					className='p-8 bg-[#151c2c] text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a] w-[45%]'>
					<option value={true}>Is Active?</option>
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<textarea
					name='address'
					id='address'
					rows='16'
					placeholder='Address'
					className='p-8 w-full bg-[#151c2c] text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'></textarea>
				<button
					type='submit'
					className='btn w-full p-8 bg-teal-500 text-white border-none rounded-md cursor-pointer'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddUsersPage;
