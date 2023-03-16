import Joi from 'joi';
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
}, { versionKey: false });
const BookModel = mongoose.model("book", bookSchema);

const BookBodyValidator = Joi.object({
	title: Joi.string().required(),
	author: Joi.string().required(),
})

export { BookModel, BookBodyValidator };
