import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const UsersPage = () => {
	return (
		<div className='cont bg-[#182237] p-5 rounded-xl mt-5'>
			<div className='topContainer flex items-center justify-between'>
				<Search placeholder='Search for a user...' />
				<Link href='/dashboard/users/add'>
					<button className='addBtn p-2.5 bg-[#5d57c9] text-white border-none rounded-[0.313rem] cursor-pointer'>
						Add New
					</button>
				</Link>
			</div>
			{/* tables should always have full width or width:100% */}
			<table className='table w-full'>
				<thead>
					<tr>
						<td className='p-2.5'>Name</td>
						<td className='p-2.5'>Email</td>
						<td className='p-2.5'>Created At</td>
						<td className='p-2.5'>Role</td>
						<td className='p-2.5'>Status</td>
						<td className='p-2.5'>Action</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='p-2.5'>
							<div className='user flex items-center gap-2.5'>
								<Image
									src='/noavatar.png'
									alt='user image'
									width={40}
									height={40}
									className='userImage rounded-[50%] object-cover'
								/>
								John Doe
							</div>
						</td>
						<td className='p-2.5'>john@gmail.com</td>
						<td className='p-2.5'>01/02/24</td>
						<td className='p-2.5'>Admin</td>
						<td className='p-2.5'>active</td>
						<td className='p-2.5'>
							<div className='buttons flex gap-2.5'>
								<Link href='/dashboard/users/test'>
									<button className='button view py-1.5 px-2.5 rounded-[0.313rem] text-white border-none cursor-pointer bg-teal-500'>
										View
									</button>
								</Link>
								<button className='button delete py-1.5 px-2.5 rounded-[0.313rem] text-white border-none cursor-pointer bg-red-500'>
									Delete
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination />
		</div>
	);
};

export default UsersPage;
