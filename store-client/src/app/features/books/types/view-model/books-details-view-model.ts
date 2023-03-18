import {IdCodeName} from '../../../../shared/types/id-code-name';

export interface BooksDetailsViewModel {
  id: number;
  title: string;
  posterUrl: string;
  pages: number;
  price: number;
  leftAmount: number;
  reviewsCount: number;
  avgMark: number;
  author: IdCodeName;
  genres: Array<IdCodeName>;
}
