import express, {Express, Request, Response} from 'express';
import {BooksService} from './data/books.service';
import {BooksFilterRequest, PaginatorRequest} from './types/request';
import {isNil} from './helpers';


const app: Express = express();
const port = process.env.PORT || 3000;

const bookService = new BooksService();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/books', (req: Request, res: Response) => {
  const paginator: PaginatorRequest = {
    page: Number(req.query.page) || 1,
    size: Number(req.query.size) || 5
  };

  const filter: BooksFilterRequest = {
    title: req.query.title ? String(req.query.title) : null,
    markTo: Number(req.query.markTo) || null,
    markFrom: Number(req.query.markFrom) || null,
    priceFrom: Number(req.query.priceFrom) || null,
    priceTo: Number(req.query.priceTo) || null,
    available: !!req.query.available,
    authors: isNil(req.query.authors) ? null : (Array.isArray(req.query.authors) ? req.query.authors.map(el => String(el)) : [String(req.query.authors)]),
    genres: isNil(req.query.genres) ? null : (Array.isArray(req.query.genres) ? req.query.genres.map(el => String(el)) : [String(req.query.genres)]),
  }

  res.json(bookService.getBooksPaginatedList(paginator, filter));
});

app.get('/books/:id', (req: Request, res: Response) => {
  res.json(bookService.getBookDetails(Number(req.params.id)));
});

app.get('/books/:id/reviews', (req: Request, res: Response) => {
  const paginator: PaginatorRequest = {
    page: Number(req.query.page) || 1,
    size: Number(req.query.size) || 5
  };

  res.json(bookService.getBookReviewsPaginatedList(Number(req.params.id), paginator));
});

app.get('/authors', (req: Request, res: Response) => {
  res.json(bookService.getBookAuthorsList());
});

app.get('/genres', (req: Request, res: Response) => {
  res.json(bookService.getBookGenresList());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
