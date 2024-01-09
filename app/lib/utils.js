import mongoose from 'mongoose';

export const connectToDB = async () => {
	const connection = {};

	try {
		/* if we are already connected, we are not going to create a new connection */
		if (connection.isConnected) return;

		const db = await mongoose.connect(process.env.MONGO_URI);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		throw new Error(error.message);
	}
};
