SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
JOIN prices ON books.price = prices.id;
