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

//----------→ App Space
function App() {
  return (
  
  <Router>
      <TopNavbar />
    <Switch>
    
      <div className = "row2">
        <Navbar />

      <Route exact path = "/components/Homepage">
        <Homepage />
      </Route>

      <Route exact path = "/components/About">
        <AboutUs />
      </Route>

      </div>

    </Switch>
  </Router>
  
  );
}

export default App;
