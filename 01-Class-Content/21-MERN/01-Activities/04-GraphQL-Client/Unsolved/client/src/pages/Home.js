import React from 'react';
import { useQuery } from '@apollo/client';
import BookList from '../components/BookList';
// import QUERY_BOOKS

const Home = () => {
  // use useQuery hook to make query request
  // YOUR CODE HERE
  //

  const books = data?.books || [];

  return (
    <main>
      <div>{loading ? <div>Loading...</div> : <BookList books={books} />}</div>
    </main>
  );
};

export default Home;
