//----------→ File Imports
import './App.css';

//----------→ Framework Imports
//----→ react-router allows navigation between pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//----------→ Component Imports
import Navbar from './components/Navbar'; //navbar for side of page with links
import TopNavbar from './components/TopNavBar'; //navbar for the top of the page
import Homepage from './components/Homepage'; //homepage component
import AboutUs from './components/About'; //about page component
import Faq from './components/FAQ'; //faq page component
import Login from './pages/LogIn'; // login page



import './styles/form.css';

import { useEffect, useState } from 'react';
import {
  fetchSignUp,
  fetchLogIn,
  fetchUpdateUser,
  fetchDeleteAccount,
  fetchAPIData,
  fetchFavourite,
  getUser,
} from './utils';
import SignUp from './pages/SignUp';
import Account from './pages/Account';

//----------→ App Space
function App() {
  const [apiData, setApiData] = useState(null);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [currentPass, setCurrentPass] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

 

  useEffect(() => {
    async function fetchOnLoad() {
      setIsLoading(true);
      await getUser(setUser, setStayLoggedIn);
      await fetchAPIData(setApiData);
      setIsLoading(false);
    }

    return fetchOnLoad();
  }, []);

  const handleAlert = () => {
    setOpenAlert(true);
  };

  const handleSetFav = async (id, isFav) => {
    await fetchFavourite(id, isFav, user);
  };

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await fetchSignUp(username, email, pass, setUser, stayLoggedIn, setAlertType, setAlertMessage);
    handleAlert()
    setIsLoading(false);
    setUsername('');
    setEmail('');
    setPass('');
    // navigate('/');
  };

  const handleLogInSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await fetchLogIn(email, pass, setUser, stayLoggedIn, setAlertType, setAlertMessage);
    handleAlert()
    setIsLoading(false);
    setEmail('');
    setPass('');
    // navigate('/');
  };

  const handleAccountSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const updateObj = {
      update: { username: user.username },
      newInfo: { username, email, password: pass },
    };
    await fetchUpdateUser(updateObj, user, setUser, stayLoggedIn, currentPass, setAlertType, setAlertMessage);
    handleAlert()
    setIsLoading(false);
    setUsername('');
    setEmail('');
    setPass('');
    setCurrentPass('');
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    await fetchDeleteAccount(user, setAlertType, setAlertMessage);
    handleAlert()
    setIsLoading(false);
    //  navigate('/signup');
  };

  const handleLogOut = () => {
    localStorage.clear();
    setUser(null);
    // navigate('/login');
  };

  return (
    <Router>
      <TopNavbar />
      <div className="row2">
        <Navbar user={user} handleLogOut={handleLogOut} />

        <Switch>
          <Route path="/FAQ">
            <Faq />
          </Route>
          <Route path="/About">
            <AboutUs />
          </Route>
          <Route path="/login">
            <Login
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              setStayLoggedIn={setStayLoggedIn}
              handleLogInSubmit={handleLogInSubmit}
              isLoading={isLoading}
              openAlert= {openAlert}
              setOpenAlert={setOpenAlert}
              alertType={alertType}
              alertMessage={alertMessage}
            />
          </Route>
          <Route path="/signup">
            <SignUp
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              setStayLoggedIn={setStayLoggedIn}
              handleSignUpSubmit={handleSignUpSubmit}
              isLoading={isLoading}
              openAlert= {openAlert}
              setOpenAlert={setOpenAlert}
              alertType={alertType}
              alertMessage={alertMessage}
            />
          </Route>
          <Route path="/account">
            <Account
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              currentPass={currentPass}
              setCurrentPass={setCurrentPass}
              handleAccountSubmit={handleAccountSubmit}
              isLoading={isLoading}
              handleDeleteAccount={handleDeleteAccount}
              openAlert= {openAlert}
              setOpenAlert={setOpenAlert}
              alertType={alertType}
              alertMessage={alertMessage}
            />
          </Route>

          <Route path="/">
            <Homepage
              apiData={apiData}
              isLoading={isLoading}
              handleSetFav={handleSetFav}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
