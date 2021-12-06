//import an image for bg use
// import background from '../images/pageBG2.png';

//----------→ Component Imports
import { useEffect } from 'react';
import CardDeck from './CardDeck';
import LoadingSpinner from './LoadingSpinner';
import SearchForm from './SearchForm';

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

const Homepage = ({
  apiData,
  isLoading,
  handleSetFav,
  user,
  handleSetRating,
  setIsLoading,
  getUser,
  setUser,
  setStayLoggedIn,
  handleSearchBooks,
}) => {
  useEffect(() => {
    async function fetchOnLoad() {
      setIsLoading(true);
      await getUser(setUser, setStayLoggedIn);

      setIsLoading(false);
    }

    return fetchOnLoad();
    //eslint-disable-next-line
  }, []);

  return (
    <div style={homepageWindowStyle.div}>
      <LoadingSpinner isLoading={isLoading} />
      <SearchForm handleSearchBooks={handleSearchBooks} />
      <CardDeck
        data={apiData}
        handleSetFav={handleSetFav}
        handleSetRating={handleSetRating}
        user={user}
      />
    </div>
  );
};

export default Homepage;
