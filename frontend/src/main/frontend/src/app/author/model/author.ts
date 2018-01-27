import {Book} from "../../book/model/book";

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  books: Book[];
}
