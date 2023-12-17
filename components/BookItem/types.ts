export type BookItemType = {
  author_name?: string;
  average_rating?: string;
  book?: { id?: string; num_pages?: string };
  book_description?: string;
  book_id?: string;
  book_image_url?: string;
  book_large_image_url?: string;
  book_medium_image_url?: string;
  book_published?: string;
  book_small_image_url?: string;
  description?: string;
  guid?: string;
  isbn?: unknown;
  link?: string;
  monthFrom?: string; // dayjs month ex January
  pubDate?: string; // date obj ex "Thu, 19 Oct 2023 04:57:27 -0700"
  title?: string;
  user_date_added?: string; // date obj ex "Thu, 19 Oct 2023 04:57:27 -0700"
  user_date_created?: string; // date obj ex "Thu, 19 Oct 2023 04:57:27 -0700"
  user_name?: string;
  user_rating?: string; // from 1 to 5
  user_read_at?: string; // date obj ex "Thu, 19 Oct 2023 04:57:27 -0700"
  user_review?: unknown;
  user_shelves?: unknown;
  yearFrom?: string; // start from 2023
};
