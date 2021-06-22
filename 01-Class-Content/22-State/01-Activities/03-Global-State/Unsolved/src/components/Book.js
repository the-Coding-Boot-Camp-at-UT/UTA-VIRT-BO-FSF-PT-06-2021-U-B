import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardText,
  CardHeader,
  CardSubtitle,
  CardBody,
  Button
} from 'reactstrap';

const Book = ({ bookId, title, author, pages, description = '' }) => {
  return (
    <div>
      <Card outline color="secondary">
        <CardHeader tag="h3">Title: {title}</CardHeader>
        <CardBody>
          <CardSubtitle>Author: {author}</CardSubtitle>
          <CardText># of Pages: {pages}</CardText>
          {description ? (
            <CardText>{description}</CardText>
          ) : (
            <Link to={`/book/${bookId}`}>
              <Button color="info">Read more.</Button>
            </Link>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Book;
