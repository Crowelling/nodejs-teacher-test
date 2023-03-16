import { BookModel } from '../models/book.js'

const BookService = {};

BookService.getBooks = async ({ limit = 10, page = 1 }) => {
	try {
		return await BookModel
			.find()
			.limit(limit)
			.skip((page - 1) * limit)
			.exec();
	} catch (err) {
		console.error(err);

		return { err: err.message };
	}
};

BookService.getOneBook = async (bookId) => {
	try {
		return await BookModel.findById(bookId);
	} catch (err) {
		console.error(err);

		return { err: err.message };
	}
};

BookService.addBook = async (bookObj) => {
	try {
		return await BookModel.findOneAndUpdate(
			bookObj,
			bookObj,
			{ new: true, upsert: true }
		);
	} catch (err) {
		console.error(err);

		return { err: err.message };
	}
};

BookService.updateBook = async (bookId, bookObj) => {
	try {
		return await BookModel.findByIdAndUpdate(
			{ _id: bookId },
			bookObj,
			{ new: true }
		);
	} catch (err) {
		return { err: 'No books were updated' };
	}
};

BookService.deleteBook = async (bookId) => {
	try {
		return await BookModel.findByIdAndDelete(bookId);
	} catch (err) {
		console.error(err);
		
		return { err: 'No book was deleted' };
	}
};

	export { BookService };
