//----------→ File Imports
import './App.css';
import './styles/form.css';
import 'react-pro-sidebar/dist/css/styles.css'; //imports npm sidebar css rules
import './components/Sidebar.css'; //imports custom css that overwrites sidebar css rules

//----------→ Framework Imports
//----→ react-router allows navigation between pages
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//----------→ Component Imports
import TopNavbar from './components/TopNavBar'; //navbar for the top of the page
import Homepage from './components/Homepage'; //homepage component
import AboutUs from './components/About'; //about page component
import Faq from './components/FAQ'; //faq page component
import Login from './pages/LogIn'; // login page
import { useEffect, useState } from 'react';
import {
  fetchSignUp,
  fetchLogIn,
  fetchUpdateUser,
  fetchDeleteAccount,
  fetchFavourite,
  getUser,
  fetchRating,
  fetchSearchResults,
} from './utils';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Collection from './pages/Collection';

//==================IMPORTS FOR SIDEBAR FUNCTIONALITY======================
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';

//import icons from react icons
import { FaList } from 'react-icons/fa';
import {
  FiHome,
  FiLogOut,
  FiChevronsRight,
  FiChevronsLeft,
  FiInfo,
  FiLogIn,
  FiUserPlus,
  FiBookOpen,
} from 'react-icons/fi';

import { BiCog } from 'react-icons/bi';
import { IconContext } from 'react-icons';

//==================APP SPACE======================
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
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    async function fetchOnLoad() {
      setIsLoading(true);
      await getUser(setUser, setStayLoggedIn);
      await fetchSearchResults(
        { type: 'subject', query: 'Fiction, thrillers, general' },
        setApiData,
        setAlertType,
        setAlertMessage,
        setNumPages,
        1
      );
      setIsLoading(false);
    }

    return fetchOnLoad();
    // eslint-disable-next-line
  }, []);

  const handleAlert = () => {
    setOpenAlert(true);
  };

  const handleSetFav = async (id, isFav) => {
    await fetchFavourite(id, isFav, user);
  };

  const handleSetRating = async rating => {
    await fetchRating(rating, user);
  };

  const handleSearchBooks = async (search, page = 1) => {
    setIsLoading(true);
    try {
      await fetchSearchResults(
        search,
        setApiData,
        setAlertType,
        setAlertMessage,
        setNumPages,
        page
      );
    } catch (err) {
      console.error('💥 💥', err);
      handleAlert();
    }
    setIsLoading(false);
  };

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await fetchSignUp(
      username,
      email,
      pass,
      setUser,
      stayLoggedIn,
      setAlertType,
      setAlertMessage
    );
    handleAlert();
    setIsLoading(false);
    setUsername('');
    setEmail('');
    setPass('');
    // navigate('/');
  };

  const handleLogInSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await fetchLogIn(
      email,
      pass,
      setUser,
      stayLoggedIn,
      setAlertType,
      setAlertMessage
    );
    handleAlert();
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
    await fetchUpdateUser(
      updateObj,
      user,
      setUser,
      stayLoggedIn,
      currentPass,
      setAlertType,
      setAlertMessage
    );
    handleAlert();
    setIsLoading(false);
    setUsername('');
    setEmail('');
    setPass('');
    setCurrentPass('');
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    await fetchDeleteAccount(user, setAlertType, setAlertMessage);
    handleAlert();
    setIsLoading(false);
    //  navigate('/signup');
  };

  const handleLogOut = () => {
    localStorage.clear();
    setUser(null);
    // navigate('/login');
  };

  //==================NEW SIDEBAR FUNCTIONS====================== */}
  //useState to control a boolean that hides/shows the navbar
  const [ToggleBar, setToggleBar] = useState(false);

  // Function to invert a boolean thats used to hide/show the whole navbar
  var toggleNav = () => {
    setToggleBar(prev => !prev);
    // console.log('Toggle bar was set to:', ToggleBar);
  };
  //==================RENDER STUFF HERE====================== */}
  return (
    <Router>
      <TopNavbar />
      <div className="row2">
        {/* <Navbar user={user} handleLogOut={handleLogOut} /> */}

        {/* ==================NEW SIDEBAR INJECTION====================== */}
        <>
          <div id="header">
            {/* Sidebar component. uses ToggleBar usestate to collapse itself */}
            <ProSidebar
              breakPoint="sm"
              collapsed={ToggleBar}
              onToggle={() => setToggleBar(prev => !prev)}
            >
              {/* Sidebar header declarations */}
              <SidebarHeader>
                <Menu iconShape="circle">
                  <MenuItem>
                    <div>
                      {/* checks if Togglebar is true, gives alternate results */}
                      {
                        <p>
                          {ToggleBar ? (
                            // Iconprovider allows css to be applied inline to icons
                            <IconContext.Provider
                              value={{
                                color: 'white',
                                size: '29px',
                                fontWeight: 'strong',
                              }}
                            >
                              <FiChevronsRight onClick={toggleNav} />
                            </IconContext.Provider>
                          ) : (
                            <IconContext.Provider
                              value={{
                                color: 'white',
                                size: '29px',
                                fontWeight: 'strong',
                              }}
                            >
                              <FiChevronsLeft onClick={toggleNav} />
                            </IconContext.Provider>
                          )}
                        </p>
                      }
                    </div>
                  </MenuItem>
                </Menu>
              </SidebarHeader>

              {/* Wrap all sidebar content in here */}
              <SidebarContent>
                <Menu iconShape="square">
                  <MenuItem icon={<FiHome />}>
                    <Link to="/">Home</Link>
                  </MenuItem>

                  <MenuItem icon={<FiBookOpen />}>
                    <Link to="/collection">Collection</Link>
                  </MenuItem>

                  <MenuItem icon={<FaList />}>
                    <Link to="/FAQ">FAQ</Link>
                  </MenuItem>

                  <MenuItem icon={<FiInfo />}>
                    <Link to="/About">About Us</Link>
                  </MenuItem>

                  {/* Wrap in a ternary operator ↓ 
                      {isThisTrue ? true stuff : false stuff}
                      */}
                  {user ? (
                    <>
                      <MenuItem icon={<BiCog />}>
                        <Link to="/account">Account</Link>
                      </MenuItem>

                      <MenuItem icon={<FiLogOut />}>
                        <Link to="#" onClick={handleLogOut}>
                          Log Out
                        </Link>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem icon={<FiLogIn />}>
                        <Link to="/login">Login</Link>
                      </MenuItem>

                      <MenuItem icon={<FiUserPlus />}>
                        <Link to="/signup">Sign Up</Link>
                      </MenuItem>
                    </>
                  )}
                  {/* ADD LINKS/HANDLERS TO THESE */}
                </Menu>
              </SidebarContent>
            </ProSidebar>
          </div>
        </>

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
              openAlert={openAlert}
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
              openAlert={openAlert}
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
              openAlert={openAlert}
              setOpenAlert={setOpenAlert}
              alertType={alertType}
              alertMessage={alertMessage}
            />
          </Route>

          <Route path="/collection">
            <Collection
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              handleSetFav={handleSetFav}
              user={user}
              setAlertType={setAlertType}
              setAlertMessage={setAlertMessage}
              getUser={getUser}
              setUser={setUser}
              setStayLoggedIn={setStayLoggedIn}
              handleSetRating={handleSetRating}
            />
          </Route>
          <Route path="/">
            <Homepage
              apiData={apiData}
              isLoading={isLoading}
              handleSetFav={handleSetFav}
              handleSetRating={handleSetRating}
              user={user}
              setIsLoading={setIsLoading}
              getUser={getUser}
              setUser={setUser}
              setStayLoggedIn={setStayLoggedIn}
              handleSearchBooks={handleSearchBooks}
              numPages={numPages}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
