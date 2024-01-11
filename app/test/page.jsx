import React from 'react';

const TestPage = () => {
	const handleForm = async (formData) => {
		/* this means everything here is going to run on the server because of the "use server directive" */
		'use server';
		const surname = formData.get('surname');
		console.log('Hello', surname);
		console.log(formData);
	};

	return (
		<div>
			<form action={handleForm}>
				<input type='text' className='text-black' name='username' />
				<input type='text' className='text-black' name='surname' />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default TestPage;
