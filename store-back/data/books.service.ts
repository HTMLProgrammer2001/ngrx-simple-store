import books from './books.json';
import {BookAuthorModel, BookModel, BookGenreModel} from '../types/model';
import {BooksFilterRequest, PaginatorRequest} from '../types/request';
import {
  BookAuthorResponse,
  BookDetailsResponse,
  BookGenreResponse,
  BookListResponse,
  PaginatedResponse
} from '../types/response';
import {isNil} from '../helpers';

export class BooksService {
  private books: Array<BookModel> = books;

  getBooksPaginatedList(paginator: PaginatorRequest, filter: BooksFilterRequest): PaginatedResponse<BookListResponse> {
    const filteredBooks = this.books.filter(book => {
      return (isNil(filter.title) || book.title.includes(filter.title))
        && (!filter.authors?.length || filter.authors.includes(book.author.code))
        && (!filter.genres?.length || filter.genres.some(genre => !!book.genres.find(el => el.code === genre)))
        && (!filter.available || book.leftAmount > 0)
        && (isNil(filter.priceFrom) || book.price > filter.priceFrom)
        && (isNil(filter.priceTo) || book.price < filter.priceTo)
        && (isNil(filter.markFrom) || book.reviews.reduce((acc, review) => acc + review.mark, 0) / book.reviews.length > filter.markFrom)
        && (isNil(filter.markTo) || book.reviews.reduce((acc, review) => acc + review.mark, 0) / book.reviews.length < filter.markTo)
    });

    const mappedBooks: Array<BookListResponse> = filteredBooks.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      genres: book.genres,
      leftAmount: book.leftAmount,
      price: book.price,
      avgMark: book.reviews.reduce((acc, review) => acc + review.mark, 0) / book.reviews.length,
      pages: book.pages,
      posterUrl: book.posterUrl,
      reviewsCount: book.reviews.length,
    }));

    return {
      page: paginator.page,
      size: paginator.size,
      totalElements: mappedBooks.length,
      totalPages: Math.ceil(mappedBooks.length / paginator.size),
      responseList: mappedBooks.slice((paginator.page - 1) * paginator.size, paginator.page * paginator.size)
    };
  }

  getBookAuthorsList(): Array<BookAuthorResponse> {
    const authorsMap: Record<number, BookAuthorModel> = {};

    this.books.forEach(book => {
      authorsMap[book.author.id] = book.author;
    });

    return Object.values(authorsMap).map(el => ({
      id: el.id,
      code: el.code,
      name: el.name
    })).sort((a, b) => a.name.localeCompare(b.name));
  }

  getBookGenresList(): Array<BookGenreResponse> {
    const genresMap: Record<number, BookGenreModel> = {};

    this.books.forEach(book => {
      book.genres.forEach(genre => {
        genresMap[genre.id] = genre;
      });
    });

    return Object.values(genresMap).map(el => ({
      id: el.id,
      code: el.code,
      name: el.name
    })).sort((a, b) => a.name.localeCompare(b.name));
  }

  getBookDetails(id: number): BookDetailsResponse | null {
    const book = this.books.find(el => el.id === id);

    if (book) {
      return {
        id: book.id,
        author: book.author,
        genres: book.genres,
        leftAmount: book.leftAmount,
        price: book.price,
        avgMark: book.reviews.reduce((acc, review) => acc + review.mark, 0) / book.reviews.length,
        pages: book.pages,
        posterUrl: book.posterUrl,
        title: book.title,
        reviews: book.reviews,
        reviewsCount: book.reviews.length
      };
    } else {
      return null;
    }
  }
}
