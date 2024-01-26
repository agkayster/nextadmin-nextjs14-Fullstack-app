import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, min: 5 },
		userImg: { type: String },
		isAdmin: { type: Boolean, default: false },
		isActive: { type: Boolean, default: true },
		phone: { type: String },
		address: { type: String },
	},
	{ timestamps: true }
);

const productSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		desc: { type: String, required: true },
		price: { type: Number, required: true, min: 0 },
		stock: { type: Number, required: true, min: 0 },
		productImg: { type: String },
		color: { type: String },
		size: { type: String },
		address: { type: String },
		// createdBy does not need to be filled in create job or update/edit job as it references the User Model //
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User', // ref means the schema we are referencing. to get the user who created a job, we take the schema from the User schema //
			required: [true, 'Please provide a user'],
		},
	},
	{ timestamps: true }
);

// module.exports = mongoose.models.User || mongoose.model('User', userSchema);
/* check the models, if User or Product exist, do not create, if not create new one */
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Product =
	mongoose.models.Product || mongoose.model('Product', productSchema);
