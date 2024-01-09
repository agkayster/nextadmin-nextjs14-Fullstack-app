import React from 'react';
import Image from 'next/image';

const SingleProductPage = () => {
	return (
		<div className='cont flex gap-[3.13rem] mt-5'>
			<div className='infoContainer flex-1 bg-[#182237] p-5 rounded-xl font-bold text-[#b7bac1] text-center h-fit'>
				{/* position: relative, fits the image into the imageContainer, overflow:hidden allows for border radius */}
				<div className='imageContainer w-[100%] h-[18.75rem] relative rounded-xl overflow-hidden mb-5'>
					{/* use fill, so image fills it's div container */}
					<Image
						src='/noproduct.jpeg'
						alt='user image'
						fill
						className='singleProductImage'
					/>
				</div>
				<h1 className='name'>IPhone 16</h1>
			</div>
			<div className='formContainer flex-3 bg-[#182237] p-5 rounded-xl w-[65%]'>
				<form className='form flex flex-col'>
					<label className='text-xs'>Title</label>
					<input
						type='text'
						name='title'
						placeholder='iphone'
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
						// className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white'
					/>
					<label className='text-xs'>Price</label>
					<input
						type='number'
						name='price'
						placeholder=''
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
					/>
					<label className='text-xs'>Stock</label>
					<input
						type='number'
						name='Stock'
						placeholder='34'
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
					/>
					<label className='text-xs'>Color</label>
					<input
						type='text'
						name='color'
						placeholder='blue'
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
					/>
					<label className='text-xs'>Size</label>
					<input
						type='text'
						name='Size'
						placeholder=''
						className='input p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'
					/>

					<label className='text-xs'>Category</label>
					<select
						name='cat'
						id='cat'
						className='select p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] text-white my-2.5'>
						<option value='general'>Choose a Category</option>
						<option value='phone'>Phone</option>
						<option value='kitchen'>Kitchen</option>
						<option value='computer'>Computer</option>
					</select>
					<label className='text-xs'>Description</label>
					<textarea
						name='desc'
						id='desc'
						rows='16'
						placeholder='description'
						className='textarea p-5 border-2 border-solid border-[#2e374a] rounded-md bg-[#151c2c] 
            text-white my-2.5'></textarea>
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

export default SingleProductPage;
