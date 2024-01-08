import React from 'react';
import styles from './pagination.module.css';

const Pagination = () => {
	return (
		<div className='cont p-2.5 flex justify-between'>
			<button
				className={`prevBtn ${styles.button} py-1.5 px-2.5 cursor-pointer`}
				disabled>
				Previous
			</button>
			<button
				className={`nextBtn ${styles.button} py-1.5 px-2.5 cursor-pointer bg-white text-black`}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
