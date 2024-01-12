import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import { fetchProducts } from '@/app/lib/data';
import { deleteProduct } from '@/app/lib/actions';

const ProductsPage = async ({ searchParams }) => {
	const q = searchParams?.q || '';
	const page = searchParams?.page || 1;

	const { products, count } = await fetchProducts(q, page);

	return (
		<div className='cont bg-[#182237] p-5 rounded-xl mt-5'>
			<div className='topContainer flex items-center justify-between'>
				<Search placeholder='Search for a product...' />
				<Link href='/dashboard/products/add'>
					<button className='addBtn p-2.5 bg-[#5d57c9] text-white border-none rounded-[0.313rem] cursor-pointer'>
						Add New
					</button>
				</Link>
			</div>
			{/* tables should always have full width or width:100% */}
			<table className='table w-full'>
				<thead>
					<tr>
						<td className='p-2.5'>Title</td>
						<td className='p-2.5'>Description</td>
						<td className='p-2.5'>Price</td>
						<td className='p-2.5'>Created At</td>
						<td className='p-2.5'>Stock</td>
						<td className='p-2.5'>Action</td>
					</tr>
				</thead>
				<tbody>
					{products.map(
						({
							_id: id,
							title,
							createdAt,
							desc,
							price,
							stock,
							productImg,
							color,
							size,
							address,
						}) => (
							<tr key={id}>
								<td className='p-2.5'>
									<div className='product flex items-center gap-2.5'>
										<Image
											src={
												productImg || '/noproduct.jpeg'
											}
											alt='user image'
											width={40}
											height={40}
											className='productImage rounded-[50%] object-cover'
										/>
										{title}
									</div>
								</td>
								<td className='p-2.5'>{desc}</td>
								<td className='p-2.5'>{price}</td>
								<td className='p-2.5'>
									{createdAt?.toString().slice(4, 16)}
								</td>
								<td className='p-2.5'>{stock}</td>
								<td className='p-2.5'>
									<div className='buttons flex gap-2.5'>
										<Link
											href={`/dashboard/products/${id}`}>
											<button className='button view py-1.5 px-2.5 rounded-[0.313rem] text-white border-none cursor-pointer bg-teal-500'>
												View
											</button>
										</Link>
										<form action={deleteProduct}>
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

export default ProductsPage;
