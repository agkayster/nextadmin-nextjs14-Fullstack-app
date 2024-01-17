import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { fetchUsers } from '@/app/lib/data';

const CardComponent = async ({ searchParams }) => {
	const q = searchParams?.q || '';
	const page = searchParams?.page || 1;

	const { count } = await fetchUsers(q, page);
	return (
		<div className='cont flex gap-5 bg-[#182237] p-5 rounded-xl cursor-pointer w-full hover:bg-[#2e374a]'>
			<MdSupervisedUserCircle size={24} />
			<div className='texts flex flex-col gap-5'>
				<span className='title'>Total Users</span>
				<span className='number text-2xl font-medium'>{count}</span>
				<span className='detail text-xs font-light'>
					<span className='positive text-lime-500'>12%</span> more
					than previous week
				</span>
			</div>
		</div>
	);
};

export default CardComponent;
