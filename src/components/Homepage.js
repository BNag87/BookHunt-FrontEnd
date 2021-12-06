//import an image for bg use
// import background from '../images/pageBG2.png';

//----------→ Component Imports
import CardDeck from './CardDeck';
import LoadingSpinner from './LoadingSpinner';

var homepageWindowStyle = {
  div: {
    // // set a background image for the div that contains the page content
    // backgroundImage: `url(${background})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // color: 'black',
    // margin: '5px',
    // padding: '5px',
    width: '100%',
  },

  //style all h1 elements **in this component**
  h1: {
    color: 'grey',
  },
};

const Homepage = ({ apiData, isLoading, handleSetFav, user }) => {
  return (
    <div style={homepageWindowStyle.div}>
      <LoadingSpinner isLoading={isLoading} />
      <CardDeck data={apiData} handleSetFav={handleSetFav} user={user} />
    </div>
  );
};

export default Homepage;
