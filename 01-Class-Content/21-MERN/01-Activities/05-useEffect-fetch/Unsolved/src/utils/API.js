export const fetchGiphy = (query) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1`
  );
};
