var topNavBarStyle = {
  div: {
    background: 'linear-gradient(to top, rgba(0,100,0,0.5), rgba(0,150,0,1))',
    color: 'white',
    width: '100vh%',
    height: '10%',
    padding: '10px',
    textAlign: 'center',
  },
  h1: {
    color: '#FFFFBF',
    textShadow: '2px 2px 2px rgba(204,204,204,0.8)',
    fontSize: '4rem',
    margin: '0.75rem',
    fontWeight: '300',
  },
};

const TopNavbar = () => {
  return (
    <div style={topNavBarStyle.div}>
      <h1 style={topNavBarStyle.h1}>Welcome to Book Hunt</h1>
    </div>
  );
};

export default TopNavbar;
