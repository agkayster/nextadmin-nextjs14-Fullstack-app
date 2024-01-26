import React from 'react';
import { addProduct } from '@/app/lib/actions';
import { auth } from '@/app/auth';

const AddProductPage = async () => {
	/* if user is not authenticated, meaning they have no session/token.sub, then they cannot add products. 
	If user is authenticated and has a session/token.sub, we pass to sub to the input value for createdBy below */
	const {
		user: { username, sub },
	} = await auth();

	if (sub) {
		return (
			<div className='cont bg-[#182237] p-5 rounded-xl mt-5'>
				<form
					action={addProduct}
					className='form flex flex-wrap justify-between'>
					<input
						className='title p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
						border-2 border-[#2e374a]'
						type='text'
						placeholder='title'
						name='title'
						required
					/>
					<select
						name='cat'
						id='cat'
						className='p-8 bg-[#151c2c] text-white rounded-md mb-8 border-solid 
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
						className='p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
						border-2 border-[#2e374a]'
					/>
					<input
						type='number'
						placeholder='stock'
						name='stock'
						className='p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
						border-2 border-[#2e374a]'
					/>
					<input
						type='text'
						placeholder='color'
						name='color'
						className='p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
						border-2 border-[#2e374a]'
					/>
					<input
						type='text'
						placeholder='size'
						name='size'
						className='p-8 w-[45%] bg-[#151c2c] text-white rounded-md mb-8 border-solid 
						border-2 border-[#2e374a]'
					/>
					<textarea
						name='desc'
						id='desc'
						rows='16'
						placeholder='description'
						className='p-8 w-full bg-[#151c2c] text-white rounded-md mb-8 border-solid 
						border-2 border-[#2e374a]'></textarea>
					<input type='hidden' name='createdBy' value={sub} />
					<button
						type='submit'
						className='btn w-full p-8 bg-teal-500 text-white border-none rounded-md cursor-pointer'>
						Submit
					</button>
				</form>
			</div>
		);
	} else {
		return;
	}
};

export default AddProductPage;
