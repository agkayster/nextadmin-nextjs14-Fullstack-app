'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({ title, path, icon }) => {
	const pathname = usePathname();
	return (
		<Link
			href={path}
			className={`cont flex p-5 items-center gap-2.5 m-[0.31rem] rounded-[0.625rem] hover:bg-[#2e374a] ${
				pathname === path && 'bg-[#2e374a]'
			}`}>
			{icon}
			{title}
		</Link>
	);
};

export default MenuLink;
