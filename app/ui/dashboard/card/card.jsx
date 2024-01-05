import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const CardComponent = () => {
	return (
		<div className='cont flex gap-5 bg-[#182237] p-5 rounded-xl cursor-pointer w-full hover:bg-[#2e374a]'>
			<MdSupervisedUserCircle size={24} />
			<div className='texts flex flex-col gap-5'>
				<span className='title'>Total Users</span>
				<span className='number text-2xl font-medium'>10.273</span>
				<span className='detail text-xs font-light'>
					<span className='positive text-lime-500'>12%</span> more
					than previous week
				</span>
			</div>
		</div>
	);
};

export default CardComponent;
