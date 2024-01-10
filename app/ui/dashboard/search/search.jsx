'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeholder }) => {
	const searchParams = useSearchParams();
	/* replace is used to replace our pathname and add search query */
	const { replace } = useRouter();
	const pathname = usePathname();

	/* useDebouncedCallback is a library that waits for the user to finish typing in the search bar before the search functionality kicks off */
	const handleSearch = useDebouncedCallback((e) => {
		const { value } = e.target;
		const params = new URLSearchParams(searchParams);

		if (value) {
			/* set our search params to match our query for whatever we type in the search input. added a condition that the value typed in the search bar must be greater than 2 characters for the search to kick in */
			value.length > 2 && params.set('q', value);
		} else {
			params.delete('q');
		}
		/* use replace to add our search params query to our pathname */
		replace(`${pathname}?${params}`);
		/* 300 is the time period it waits for the user to finish typing */
	}, 300);

	return (
		<div className='cont flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-xl w-max'>
			<MdSearch />
			<input
				type='text'
				placeholder={placeholder}
				className='input bg-transparent border-none text-white outline-none'
				onChange={handleSearch}
			/>
		</div>
	);
};

export default Search;
