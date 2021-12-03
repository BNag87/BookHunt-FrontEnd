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
      setAlertType("error")
      setAlertMessage('Error signing up')
      throw new Error('Error signing up');}
  
    const responseObj = await response.json();
    setAlertType("success")
    setAlertMessage("Sign up successful, you are now logged in");

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
    console.error('💥 💥', err);
  }
};

export const fetchLogIn = async (email, password, setUser, stayLoggedIn, setAlertType,
  setAlertMessage) => {
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
      setAlertType("error")
      setAlertMessage('Error logging in')
      throw new Error('Error logging in');}
  
    const responseObj = await response.json();
    setAlertType("success")
    setAlertMessage("Log in successful");
  

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
      setAlertType("error")
      setAlertMessage('Error updating account')
      throw new Error('Error updating account');}
  
    const responseObj = await response.json();
   

    const password = updateObj.newInfo.password || currentPass;

    await fetchLogIn(responseObj.doc.email, password, setUser, stayLoggedIn);
    setAlertType("success")
    setAlertMessage(responseObj.message);
  } catch (err) {
    console.error('💥 💥', err);
  }
};

export const fetchDeleteAccount = async (user, setAlertType,
  setAlertMessage) => {
  const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ username: user.username }),
  });

  if (!response.ok) {
    setAlertType("error")
    setAlertMessage('Error deleting account')
    throw new Error('Error deleting account');}

  const responseObj = await response.json();
  setAlertType("success")
  setAlertMessage(responseObj.message);
};

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
