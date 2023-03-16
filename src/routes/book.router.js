import { Router } from 'express';
import { BookController } from '../controllers/book.controller.js';

export const bookRouter = Router();

bookRouter.get(
    '/',
    BookController.getBooks,
);
bookRouter.get(
    '/:bookId',
    BookController.getOneBook,
);
bookRouter.post(
    '/',
    BookController.addBook,
);
bookRouter.put(
    '/:bookId',
    BookController.updateBook,
);
bookRouter.delete(
    '/:bookId',
    BookController.deleteBook,
);
