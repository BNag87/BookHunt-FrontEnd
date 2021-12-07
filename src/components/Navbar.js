import { Link } from 'react-router-dom';

var navBarStyle = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    textAlign: 'center',
    background: 'rgba(181, 225, 190,0.8)',
    color: 'white',

    // height: '100vh',
    padding: '1px',

    borderStyle: 'none double none none',
  },
  h2: {
    color: '#FFFFBF',
    textShadow: '2px 2px 2px rgba(204,204,204,0.8)',
    marginBottom: '5px',
  },
};

//used as a container for elements in the navbar
var containerStyle = {
  div: {
    // background: 'rgba(173,216,230,0.5)',
    background: '#579069',
    borderRadius: '5px',
    // border: 'outset #FFFFAE 1px',
    border: 'outset #42635b 1px',
    padding: '10px',
    margin: '5px',
  },
};

//css rules for 'buttons'. links provided by react-router
var customButtonStyle = {
  div: {
    // background: 'rgba(173,216,230,0.5)',
    background: '#7FB08E',

    borderRadius: '5px',
    border: 'outset #42635b 1px',
    // border: 'outset #FFFFAE 1px',
    width: '120px',
    margin: '5px',
    padding: '5px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',
    fontFamily: 'sans-serif',
  },

  h3: {
    color: '#ffffff',
    textDecoration: 'none',
    fontVariant: 'small-caps',
    margin: '2px',
    textShadow: '3px 1px 2px rgba(2,20,50,0.5)',
  },
};

//actual navbar as JSX
const Navbar = ({ user, handleLogOut }) => {
  return (
    <div style={navBarStyle.div}>
      <h2 style={navBarStyle.h2}>Links</h2>

      <div style={containerStyle.div}>
        <Link to="/">
          <div style={customButtonStyle.div}>
            <h3 style={customButtonStyle.h3}>Home</h3>
          </div>
        </Link>

        <Link to="/collection">
          <div style={customButtonStyle.div}>
            <h3 style={customButtonStyle.h3}>Collection</h3>
          </div>
        </Link>

        <Link to="/FAQ">
          <div style={customButtonStyle.div}>
            <h3 style={customButtonStyle.h3}>FAQ</h3>
          </div>
        </Link>

        <Link to="/About">
          <div style={customButtonStyle.div}>
            <h3 style={customButtonStyle.h3}>About Us</h3>
          </div>
        </Link>
      </div>

      <h2 style={navBarStyle.h2}>Account</h2>
      <div style={containerStyle.div}>
        {user ? (
          <>
            <Link to="/account">
              <div style={customButtonStyle.div}>
                <h3 style={customButtonStyle.h3}>My Account</h3>
              </div>
            </Link>
            <Link to="/" onClick={handleLogOut}>
              <div style={customButtonStyle.div}>
                <h3 style={customButtonStyle.h3}>Log Out</h3>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <div style={customButtonStyle.div}>
                <h3 style={customButtonStyle.h3}>Login</h3>
              </div>
            </Link>
            <Link to="/signup">
              <div style={customButtonStyle.div}>
                <h3 style={customButtonStyle.h3}>Sign Up</h3>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
