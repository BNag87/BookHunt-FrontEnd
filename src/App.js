//----------→ File Imports
import './App.css';
//----------→ Framework Imports
//----→ react-router allows navigation between pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//----------→ Component Imports
import Navbar from './components/Navbar'; //navbar for side of page with links
import TopNavbar from './components/TopNavBar'; //navbar for the top of the page
import Homepage from './components/Homepage'; //homepage component
import AboutUs from './components/About'; //
import { useEffect, useState } from 'react';
import { fetchAPIData, fetchFavourite } from './utils';

//----------→ App Space
function App() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchOnLoad() {
      setIsLoading(true);
      await fetchAPIData(setApiData);
      setIsLoading(false);
    }

    // temp for testing
    setUser(() => {
      return {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE2NDU4YThmMDFiNDM5NzQwNGIwZWUiLCJpYXQiOjE2MzgyODY3MzB9.TeaawgdxpR-NUJd5AtvQb4v4x80GkXHXv7TfKxP67Lk',
      };
    });
    return fetchOnLoad();
  }, []);

  const handleSetFav = async (id, isFav) => {
    await fetchFavourite(id, isFav, user);
  };

  return (
    <Router>
      <TopNavbar />
      <Switch>
        <div className="row2">
          <Navbar />

          <Route exact path="/components/Homepage">
            <Homepage
              apiData={apiData}
              isLoading={isLoading}
              handleSetFav={handleSetFav}
            />
          </Route>

          <Route exact path="/components/About">
            <AboutUs />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
