export const fetchAPIData = async setApiData => {
  try {
    const response = await fetch('https://bookshelves.p.rapidapi.com/books', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'bookshelves.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    });

    if (!response.ok) throw new Error('Error fetching book data');

    const responseObj = await response.json();
    const bookData = responseObj.Books;
    setApiData(bookData);
  } catch (err) {
    console.error('💥 💥', err);
  }
};
