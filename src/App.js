//----------→ File Imports
import './App.css';

  
//----------→ Component Imports
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavBar';
import Bookcollection from './components/Bookcollection'; //displays all books

//----------→ App Space
function App() {
  return (
  <>
    <TopNavbar />
      <div className = "row2">
        <Navbar />
        <Bookcollection />
      </div>
  </>
  );
}

export default App;
