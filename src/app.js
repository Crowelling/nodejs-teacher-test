import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import bodyParser from 'body-parser';
import { bookRouter } from './routes/book.router.js';

const app = express();
const port = 3000;
const DATABASE_URL = process.env.DATABASE_URL ?? 'mongodb://mongo:27017/books';
app.use(cors())
app.use(bodyParser.json());

app.use('/api/books', bookRouter);app

try {
	await connect(
		DATABASE_URL,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	);
	console.log('Connected to mongoose server');

	app.listen(port, () => {
		console.log('Server has been started on port: ', port);
	});
} catch(err) {
	console.error(err.message);
	process.exit(1);
}
