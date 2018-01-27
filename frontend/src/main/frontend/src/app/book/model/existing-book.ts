import {ExistingAuthor} from "../../author/model/existing-author";

export interface ExistingBook {
  id: number;
  title: string;
  authors: ExistingAuthor[];
  genre: string;
  publicationDate: Date;
}
