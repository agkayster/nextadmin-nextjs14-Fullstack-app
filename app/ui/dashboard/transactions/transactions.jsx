import React from 'react';
import Image from 'next/image';

const TransactionsComponent = () => {
	return (
		<div className='cont bg-[#182237] p-5 rounded-xl hover:bg-[#2e374a]'>
			<h2 className='title mb-5 font-extralight text-[#b7bac1]'>
				Latest Transactions
			</h2>
			<table className='table w-full'>
				<thead>
					<tr>
						<th className='text-left pl-3'>Name</th>
						<th className='text-left pl-3'>Status</th>
						<th className='text-left pl-3'>Date</th>
						<th className='text-left pl-3'>Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='p-2.5'>
							<div className='user flex gap-2.5 items-center'>
								<Image
									src='/noavatar.png'
									alt='user image'
									width={40}
									height={40}
									className='userImage object-cover rounded-[50%]'
								/>
								John Doe
							</div>
						</td>
						<td>
							<span
								className={`status pending p-2.5 rounded-md text-sm text-white bg-[#f7cb7375]`}>
								Pending
							</span>
						</td>
						<td className='p-2.5'>14/02/2024</td>
						<td className='p-2.5'>$3,200</td>
					</tr>
					<tr>
						<td className='p-2.5'>
							<div className='user flex gap-2.5 items-center'>
								<Image
									src='/noavatar.png'
									alt='user image'
									width={40}
									height={40}
									className='userImage object-cover rounded-[50%]'
								/>
								John Doe
							</div>
						</td>
						<td>
							<span
								className={`status done p-2.5 rounded-md text-sm text-white bg-[#afd6ee75]`}>
								Done
							</span>
						</td>
						<td className='p-2.5'>14/02/2024</td>
						<td className='p-2.5'>$3,200</td>
					</tr>
					<tr>
						<td className='p-2.5'>
							<div className='user flex gap-2.5 items-center'>
								<Image
									src='/noavatar.png'
									alt='user image'
									width={40}
									height={40}
									className='userImage object-cover rounded-[50%]'
								/>
								John Doe
							</div>
						</td>

						<td>
							<span
								className={`status cancelled p-2.5 rounded-md text-sm text-white bg-[#f7737375]`}>
								Cancelled
							</span>
						</td>
						<td className='p-2.5'>14/02/2024</td>
						<td className='p-2.5'>$3,200</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TransactionsComponent;
