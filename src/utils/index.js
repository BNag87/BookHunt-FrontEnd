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

export const fetchFavourite = async (id, isFav, user) => {
  try {
    let route;
    if (isFav) route = 'favourite';
    else route = 'unfavourite';

    const response = await fetch(`http://localhost:5000/${route}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ id: id }),
    });

    if (!response.ok) throw new Error('Error updating favourite');

    const responseObj = await response.json();

    console.log(responseObj);
  } catch (err) {
    console.error('💥 💥', err);
  }
};
