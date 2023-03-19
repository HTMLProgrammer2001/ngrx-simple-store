import {IdCodeName} from '../../../../shared/types/id-code-name';

export interface BooksListGetModel {
  id: number;
  title: string;
  posterUrl: string;
  pages: number;
  price: number;
  leftAmount: number;
  author: IdCodeName;
  genres: Array<IdCodeName>;
  reviewsCount: number;
  avgMark: number;
}
