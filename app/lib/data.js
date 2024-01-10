import { User, Product } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {
	const regex = new RegExp(q, 'i');

	/* list or number of people per page */
	const ITEM_PER_PAGE = 2;

	/* skip enables us to move to the next page in our pagination. you can use .count() or .countDocuments() below */
	try {
		connectToDB();
		const count = await User.find({
			username: { $regex: regex },
		}).count();
		const users = await User.find({ username: { $regex: regex } })
			.limit(ITEM_PER_PAGE)
			.skip(ITEM_PER_PAGE * (page - 1));
		return { count, users };
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
export const fetchProducts = async (q, page) => {
	const regex = new RegExp(q, 'i');

	/* list or number of people per page */
	const ITEM_PER_PAGE = 2;

	/* skip enables us to move to the next page in our pagination. you can use .count() or .countDocuments() below */
	try {
		connectToDB();
		const count = await Product.find({
			title: { $regex: regex },
		}).count();
		const products = await Product.find({ title: { $regex: regex } })
			.limit(ITEM_PER_PAGE)
			.skip(ITEM_PER_PAGE * (page - 1));
		return { count, products };
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
