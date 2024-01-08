import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeholder }) => {
	return (
		<div className='cont flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-xl w-max'>
			<MdSearch />
			<input
				type='text'
				placeholder={placeholder}
				className='input bg-transparent border-none text-white outline-none'
			/>
		</div>
	);
};

export default Search;
