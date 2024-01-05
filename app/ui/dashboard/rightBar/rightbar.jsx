'use client';

import React from 'react';
import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const RightBarComponet = () => {
	return (
		<div className='cont'>
			<div className='item relative bg-gradient-to-t from-[#182237] to-[#253532] py-5 px-0 rounded-xl mb-5'>
				<div className='bgContainer absolute right-0 bottom-0 w-[50%] h-[50%]'>
					<Image
						src='/astronaut.png'
						alt='right bar image'
						fill
						className='bg object-contain opacity-20'
					/>
				</div>
				<div className='texts flex flex-col gap-6 p-2.5'>
					<span className='notification font-bold'>
						🔥 Available Now
					</span>
					<h3 className='title font-medium text-xs text-[#b7bac1]'>
						How to use this version of the Admin board
					</h3>
					<span className='subTitle'>Takes 4 minutes to learn</span>
					<p className='description'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</p>
					<button
						className='btn p-5 flex items-center gap-2.5 bg-[#5d57c9] text-white 
					border-none rounded-md cursor-pointer w-max'>
						<MdPlayCircleFilled />
						Watch
					</button>
				</div>
			</div>
			<div className='item bg-gradient-to-t from-[#182237] to-[#253532] py-5 px-0 rounded-xl mb-5'>
				<div className='texts flex flex-col gap-6 p-2.5'>
					<span className='notification font-bold'>
						🚀 Coming soon
					</span>
					<h3 className='title font-medium text-xs text-[#b7bac1]'>
						How to use this version of the Admin board
					</h3>
					<span className='subTitle'>Takes 4 minutes to learn</span>
					<p className='description'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</p>
					<button
						className='btn p-5 flex items-center gap-2.5 bg-[#5d57c9] text-white 
					border-none rounded-md cursor-pointer w-max'>
						<MdReadMore />
						Watch
					</button>
				</div>
			</div>
		</div>
	);
};

export default RightBarComponet;
