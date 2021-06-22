import React from 'react';
import { useQuery } from '@apollo/client';
import Book from '../components/Book';

import { QUERY_BOOKS } from '../utils/queries';

const BookList = () => {
  const { data: bookData } = useQuery(QUERY_BOOKS);

  const books = bookData?.books || [];

  if (!books?.length) {
    return <h3>There are no books in this library!</h3>;
  }

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book._id}
          bookId={book._id}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

export default BookList;
