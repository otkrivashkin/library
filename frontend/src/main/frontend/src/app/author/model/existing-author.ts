import {ExistingBook} from "../../book/model/existing-book";

export interface ExistingAuthor {
  id: number;
  firstName: string;
  lastName: string;
  books: ExistingBook[];
}
