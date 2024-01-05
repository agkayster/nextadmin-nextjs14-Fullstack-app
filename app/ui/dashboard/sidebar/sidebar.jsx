'use client';

import React from 'react';
import Image from 'next/image';
import { menuItems } from '../../../components/menuItems';
import MenuLink from './menuLink/menuLink';
import { MdLogout } from 'react-icons/md';

const Sidebar = () => {
	return (
		<div className='cont sticky top-10'>
			<div className='user flex items-center gap-5 mb-5'>
				<Image
					src='/noavatar.png'
					alt='user image'
					width='50'
					height='50'
					className='userImage rounded-[50%] object-cover'
				/>
				<div className='userDetail flex flex-col'>
					<span className='userName font-medium'>John Doe</span>
					<span className='userTitle text-xs text-[#b7bac1]'>
						Administrator
					</span>
				</div>
			</div>
			<ul className='list'>
				{menuItems.map(({ title, list }) => (
					<li key={title}>
						<span className='category text-[#b7bac1] font-bold text-sm my-5 mx-0'>
							{title}
						</span>
						{list.map(({ icon, title, path }) => (
							<MenuLink
								title={title}
								path={path}
								icon={icon}
								key={title}
							/>
						))}
					</li>
				))}
			</ul>
			<button
				className='logout flex items-center gap-2.5 cursor-pointer 
			rounded-xl my-1.5 mx-0 p-5 border-none w-full hover:bg-[#2e374a]'>
				<MdLogout size={20} />
				Logout
			</button>
		</div>
	);
};

export default Sidebar;
