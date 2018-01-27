import {Author} from "../../author/model/author";

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  genre: string;
  publicationDate: Date;
}
