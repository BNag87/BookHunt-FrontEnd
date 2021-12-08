export const getUser = async (setUser, setStayLoggedIn) => {
  try {
    const savedUser = localStorage.getItem('credentials');

    if (!savedUser) {
      // navigate('/login');
      return;
    }

    const userCreds = JSON.parse(savedUser);

    const response = await fetch(`${process.env.REACT_APP_REST_API}token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userCreds.token}`,
      },
    });

    if (!response.ok) {
      // navigate('/signup');
      return;
    } else {
      const fetchedUser = await response.json();

      setUser({
        username: fetchedUser.user.username,
        email: fetchedUser.user.email,
        token: fetchedUser.token,
        favourites: fetchedUser.user.favorites,
        ratings: fetchedUser.user.rating,
      });

      // Set stayLoggedIn to true because if savedUser exists they must have checked the box on login/signup.
      // Setting it here allows user update function to respect their initial choice without asking them again.
      setStayLoggedIn(true);

      localStorage.setItem(
        'credentials',
        JSON.stringify({
          token: fetchedUser.token,
          username: fetchedUser.user.username,
          email: fetchedUser.user.email,
        })
      );
    }
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchSignUp = async (
  username,
  email,
  password,
  setUser,
  stayLoggedIn,
  setAlertType,
  setAlertMessage
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error('Error signing up');
    }

    const responseObj = await response.json();
    setAlertType('success');
    setAlertMessage('Sign up successful, you are now logged in');

    const {
      newUser: { username: newUsername, email: newEmail },
      token,
    } = responseObj;

    setUser({ username: newUsername, email: newEmail, token });

    if (stayLoggedIn)
      localStorage.setItem(
        'credentials',
        JSON.stringify({
          token: token,
          username: newUsername,
          email: newEmail,
        })
      );
  } catch (err) {
    setAlertType('error');
    setAlertMessage(err.message);
    console.error('💥 💥', err);
  }
};

export const fetchLogIn = async (
  email,
  password,
  setUser,
  stayLoggedIn,
  setAlertType,
  setAlertMessage
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error('Error logging in');
    }

    const responseObj = await response.json();
    setAlertType('success');
    setAlertMessage('Log in successful');

    const {
      user: { username, email: userEmail },
      token,
    } = responseObj;

    setUser({ username: username, email: userEmail, token });

    if (stayLoggedIn)
      localStorage.setItem(
        'credentials',
        JSON.stringify({
          token: token,
          username: username,
          email: userEmail,
        })
      );
  } catch (err) {
    console.error('💥 💥', err);
    setAlertType('error');
    setAlertMessage(err.message);
  }
};

export const fetchUpdateUser = async (
  updateObj,
  user,
  setUser,
  stayLoggedIn,
  currentPass,
  setAlertType,
  setAlertMessage
) => {
  try {
    const body = updateObj;
    body.password = currentPass;

    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Error updating account');
    }

    const responseObj = await response.json();

    const password = updateObj.newInfo.password || currentPass;

    await fetchLogIn(
      responseObj.doc.email,
      password,
      setUser,
      stayLoggedIn,
      setAlertType,
      setAlertMessage
    );
    setAlertType('success');
    setAlertMessage(responseObj.message);
  } catch (err) {
    console.error('💥 💥', err);
    setAlertType('error');
    setAlertMessage(err.message);
  }
};

export const fetchDeleteAccount = async (
  user,
  setAlertType,
  setAlertMessage
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ username: user.username }),
    });

    if (!response.ok) {
      throw new Error('Error deleting account');
    }

    const responseObj = await response.json();
    setAlertType('success');
    setAlertMessage(responseObj.message);
  } catch (err) {
    console.error('💥 💥', err);
    setAlertType('error');
    setAlertMessage(err.message);
  }
};

export const fetchAPIData = async setApiData => {
  try {
    const url = `https://openlibrary.org/search.json`;
    const query = `?subject=Fiction, thrillers, general`;
    const options = `&limit=10`;
    const fields = `&fields=title,first_publish_year,author_name,number_of_pages_median,subject,cover_edition_key,id_amazon,key`;

    const bookData = await fetchBookData(url, query, options, fields);

    if (!bookData) throw new Error('Error while fetching data');

    setApiData(bookData);
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchSearchResults = async (
  search,
  setApiData,
  setAlertType,
  setAlertMessage
) => {
  try {
    const url = `https://openlibrary.org/search.json`;
    const query = `?${search.type}=${search.query}`;
    const options = `&limit=10`;
    const fields = `&fields=title,first_publish_year,author_name,number_of_pages_median,subject,cover_edition_key,id_amazon,key`;

    const bookData = await fetchBookData(url, query, options, fields);

    if (!bookData)
      throw new Error('We could not find any results that matched your query');

    setApiData(bookData);
  } catch (err) {
    console.error('💥 💥', err);
    setAlertType('error');
    setAlertMessage(err.message);
  }
};

export const fetchFavouriteList = async (
  user,
  setAlertType,
  setAlertMessage,
  setFavData
) => {
  try {
    const userFavsResponse = await fetch(
      `${process.env.REACT_APP_REST_API}profile`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (!userFavsResponse.ok) {
      throw new Error('Error fetching user favourites');
    }

    const userFavsObj = await userFavsResponse.json();

    const favBooksObj = await Promise.all(
      userFavsObj.listFavBook.map(bookID => {
        const url = `https://openlibrary.org/search.json`;
        const query = `?q=${bookID}`;
        const options = `&limit=1`;
        const fields = `&fields=title,first_publish_year,author_name,number_of_pages_median,subject,cover_edition_key,id_amazon,key`;

        return fetchBookData(url, query, options, fields);
      })
    );

    let favBooks = {};
    favBooks.docs = favBooksObj.map(el => el.docs[0]);

    setFavData(favBooks);
  } catch (err) {
    console.error('💥 💥', err);
    setAlertType('error');
    setAlertMessage(err.message);
  }
};

export const fetchFavourite = async (id, isFav, user) => {
  try {
    let route;
    if (isFav) route = 'favourite';
    else route = 'unfavourite';

    const response = await fetch(`${process.env.REACT_APP_REST_API}${route}`, {
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

export const fetchRating = async (rating, user) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}review`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(rating),
    });

    if (!response.ok) throw new Error('Error updating rating');

    const responseObj = await response.json();

    console.log(responseObj);
  } catch (err) {
    console.error('💥 💥', err);
  }
};

const fetchBookData = async (url, query, options, fields) => {
  try {
    // When passing arguments, ensure query starts with ?= then options and fields start with &=
    const response = await fetch(
      encodeURI(`${url}${query}${options}${fields}`)
    );

    if (!response.ok) throw new Error('Error fetching book data');

    return await response.json();
  } catch (err) {
    console.error('💥 💥', err);
  }
};
