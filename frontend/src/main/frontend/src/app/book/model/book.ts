import {Author} from "../../author/model/author";

export interface Book {
  id: number;
  title: string;
  author: Author;
  genre: string;
  publicationDate: Date;
}
