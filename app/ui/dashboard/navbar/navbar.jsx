'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
	MdNotifications,
	MdOutlineChat,
	MdPublic,
	MdSearch,
} from 'react-icons/md';

const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className='cont flex justify-between items-center p-5 rounded-[0.625rem] bg-[#182237]'>
			<div className='title text-[#b7bac1] font-bold capitalize'>
				{pathname.split('/').pop()}
			</div>
			<div className='menu flex flex-row items-center gap-5'>
				<div className='search flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-xl'>
					<MdSearch />
					<input
						type='text'
						placeholder='Search...'
						className='input bg-transparent border-none text-white'
					/>
				</div>
				<div className='icons flex items-center gap-5'>
					<MdOutlineChat size={20} />
					<MdNotifications size={20} />
					<MdPublic size={20} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
