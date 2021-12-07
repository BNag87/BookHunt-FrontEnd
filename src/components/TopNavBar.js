var topNavBarStyle = {
  div: {
    background:
      'linear-gradient(to bottom, rgba(87,144,105,1), rgba(181, 225, 190,0.8))',
    color: 'white',
    width: '100vw',
    height: '10%',
    padding: '10px',
    textAlign: 'center',
  },
  h1: {
    color: 'rgb(190, 152, 110)',
    webkitTextStroke: '1px rgba(0,0,0,0.7)',
    textShadow: 'rgb(150 150 150 / 60%) 2px 2px 5px',
    fontSize: '4.3rem',
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
