import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Header from './components/Header';
import BookList from './pages/BookList';
import Detail from './pages/Detail';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [currentBook, setCurrentBook] = useState('');

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header currentBook={currentBook} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={BookList} />
              <Route
                exact
                path="/book/:bookId"
                component={() => (
                  <Detail
                    setCurrentBook={setCurrentBook}
                    currentBook={currentBook}
                  />
                )}
              />
              <Route render={() => <h1>404! Wrong Page</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
