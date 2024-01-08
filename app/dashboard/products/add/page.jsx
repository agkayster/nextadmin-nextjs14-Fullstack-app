import React from 'react';

const AddProductPage = () => {
	return (
		<div className='cont bg-[#182237] p-5 rounded-xl mt-5'>
			<form className='form flex flex-wrap justify-between'>
				<input
					className='title p-8 w-[45%] bg-transparent text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
					type='text'
					placeholder='title'
					name='title'
					required
				/>
				<select
					name='cat'
					id='cat'
					className='p-8 bg-transparent text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a] w-[45%]'>
					<option value='general'>Choose a category</option>
					<option value='kitchen'>Kitchen</option>
					<option value='phone'>Phone</option>
					<option value='computer'>Computer</option>
					<option value='battery'>Battery</option>
					<option value='tablet'>Tablet</option>
				</select>
				<input
					type='number'
					placeholder='price'
					name='price'
					className='p-8 w-[45%] bg-transparent text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
				/>
				<input
					type='number'
					placeholder='stock'
					name='stock'
					className='p-8 w-[45%] bg-transparent text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
				/>
				<input
					type='text'
					placeholder='color'
					name='color'
					className='p-8 w-[45%] bg-transparent text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
				/>
				<input
					type='text'
					placeholder='size'
					name='size'
					className='p-8 w-[45%] bg-transparent text-white rounded-md mb-8 border-solid 
					border-2 border-[#2e374a]'
				/>
				<textarea
					name='desc'
					id='desc'
					rows='16'
					placeholder='description'
					className='p-8 w-full bg-transparent text-white rounded-md mb-8 border-solid 
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

export default AddProductPage;
