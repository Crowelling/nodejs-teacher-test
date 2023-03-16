import { BookBodyValidator } from '../models/book.js';
import { BookService } from '../services/book.service.js';

const BookController = {};

BookController.getBooks = async (req, res) => {
	const { limit, page } = req.query;
	const result = await BookService.getBooks({ limit, page });

	if (result.err) {
		return res
			.status(500)
			.set('Content-Type', 'application/json')
			.json(result);
	}

	return res
		.status(200)
		.set('Content-Type', 'application/json')
		.json(result);
};

BookController.getOneBook = async (req, res) => {
	const { bookId } = req.params;
	const result = await BookService.getOneBook(bookId);

	if (result.err) {
		return res
			.status(500)
			.set('Content-Type', 'application/json')
			.json(result);
	}

	return res
		.status(200)
		.set('Content-Type', 'application/json')
		.json(result);
};

BookController.addBook = async (req, res) => {
	const bookToAdd = req.body;
	const { error } = BookBodyValidator.validate(bookToAdd);
	if (error) {
		return res
			.status(400)
			.set('Content-Type', 'application/json')
			.json(error.message);
	}
	const result = await BookService.addBook(bookToAdd);
	if (result.err) {
		return res
			.status(400)
			.set('Content-Type', 'application/json')
			.json(result);
	}

	return res
		.status(201)
		.set('Content-Type', 'application/json')
		.json(result);
};

BookController.updateBook = async (req, res) => {
	const bookToUpdate = req.body;
	const bookId = req.params.bookId;
	const { error } = BookBodyValidator.validate(bookToUpdate);
	if (error) {
		return res
			.status(400)
			.set('Content-Type', 'application/json')
			.json(error.message);
	}

	const result = await BookService.updateBook(bookId, bookToUpdate);
	if (result.err) {
		return res
			.status(400)
			.set('Content-Type', 'application/json')
			.json(result);
	};

	return res
		.status(201)
		.set('Content-Type', 'application/json')
		.json(result);
};

BookController.deleteBook = async (req, res) => {
	const { bookId } = req.params;
	const result = await BookService.deleteBook(bookId);

	if (result.err) {
		return res
			.status(400)
			.set('Content-Type', 'application/json')
			.json(result);
	}

	return res
		.status(204)
		.end();
};

export { BookController };
