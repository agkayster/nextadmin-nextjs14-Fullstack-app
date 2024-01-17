// const cloudinary = require('cloudinary').v2
// import * as Cloudinary from 'cloudinary';
import { v2 as cloudinary } from 'cloudinary';
const fs = require('fs');

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});

export const uploadToCloudinary = async (buffer) => {
	return await new Promise((resolve, reject) => {
		cloudinary.uploader
			.upload_stream({}, function (err, result) {
				if (err) {
					reject(err);
					return;
				}
				resolve(result);
			})
			.end(buffer);
	});
};
