'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './pagination.module.css';

const Pagination = ({ count }) => {
	const searchParams = useSearchParams();
	/* replace is used to replace our pathname and add search query */
	const { replace } = useRouter();
	const pathname = usePathname();
	const params = new URLSearchParams(searchParams);

	const page = searchParams.get('page') || 1;

	/* here we set how many items we want to see per page on our app */
	const ITEM_PER_PAGE = 2;

	/* calculates how we get the previous pages */
	const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;

	/* calculates how we get the next page */
	const hasNext =
		ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

	const handleChangePage = (type) => {
		/* if we click on a button that has "prev", it should take us back one page else take us forward */
		type === 'prev'
			? params.set('page', parseInt(page) - 1)
			: params.set('page', parseInt(page) + 1);

		/* replace edits our url/pathname by adding query params */
		replace(`${pathname}?${params}`);
	};

	return (
		<div className='cont p-2.5 flex justify-between'>
			<button
				className={`prevBtn ${styles.button} py-1.5 px-2.5 cursor-pointer`}
				disabled={!hasPrev}
				onClick={() => handleChangePage('prev')}>
				Previous
			</button>
			<button
				className={`nextBtn ${styles.button} py-1.5 px-2.5 cursor-pointer bg-white text-black`}
				disabled={!hasNext}
				onClick={() => handleChangePage('next')}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
