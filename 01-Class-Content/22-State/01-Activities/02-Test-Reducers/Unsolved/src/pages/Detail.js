import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Book from '../components/Book';

import { QUERY_BOOKS } from '../utils/queries';

const Detail = ({ setCurrentBook, currentBook }) => {
  const { bookId } = useParams();

  const { data: bookData } = useQuery(QUERY_BOOKS);

  const books = bookData?.books || [];

  useEffect(() => {
    setCurrentBook(books.find(({ _id }) => _id === bookId));

    return () => {
      setCurrentBook('');
    };
  });

  return (
    <main>
      <div className="m-5">
        {currentBook ? <Book {...currentBook} /> : <h2>Loading...</h2>}
      </div>
    </main>
  );
};

export default Detail;
