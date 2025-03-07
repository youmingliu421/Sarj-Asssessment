import { Timestamp } from "firebase/firestore";

export interface BookDetailItem {
  index: string;
  content: string;
}

export interface BookDetail {
  id: string;
  metadata: BookDetailItem[];
  analysis: BookDetailItem[];
}

export interface BookData {
  metadata: BookDetailItem[];
  analysis: BookDetailItem[];
  userId: string;
  createdAt: Date | Timestamp;
}
