import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import { fetchUsers } from '@/app/lib/data';
import { deleteUser } from '@/app/lib/actions';

const UsersPage = async ({ searchParams }) => {
	//q here means the query parameter search
	const q = searchParams?.q || '';
	const page = searchParams?.page || 1;

	const { users, count } = await fetchUsers(q, page);
	console.log('get users info =>', users);

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
					{users.map(
						({
							_id: id,
							createdAt,
							username,
							email,
							password,
							userImg,
							isAdmin,
							isActive,
							phone,
							address,
						}) => (
							<tr key={id}>
								<td className='p-2.5'>
									<div className='user flex items-center gap-2.5'>
										<Image
											src={userImg || `/noavatar.png`}
											alt='user image'
											width='40'
											height='40'
											className='userImage rounded-[50%] object-cover'
										/>
										{username}
									</div>
								</td>
								<td className='p-2.5'>{email}</td>
								<td className='p-2.5'>
									{createdAt?.toString().slice(4, 16)}
								</td>
								<td className='p-2.5'>
									{isAdmin ? 'Admin' : 'User'}
								</td>

								<td className='p-2.5'>
									{isActive ? 'active' : 'passive'}
								</td>

								<td className='p-2.5'>
									<div className='buttons flex gap-2.5'>
										{/* pass id or whatever is inside the [] bracket, to view single user */}
										<Link href={`/dashboard/users/${id}`}>
											<button className='button view py-1.5 px-2.5 rounded-[0.313rem] text-white border-none cursor-pointer bg-teal-500'>
												View
											</button>
										</Link>
										<form action={deleteUser}>
											<input
												type='hidden'
												name='id'
												value={id.toString()}
											/>
											<button className='button delete py-1.5 px-2.5 rounded-[0.313rem] text-white border-none cursor-pointer bg-red-500'>
												Delete
											</button>
										</form>
									</div>
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
			<Pagination count={count} />
		</div>
	);
};

export default UsersPage;
