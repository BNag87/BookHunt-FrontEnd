//----------→ Component Imports
import { useEffect, useState } from 'react';
import CardDeck from '../components/CardDeck';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchFavouriteList } from '../utils';

var collectionWindowStyle = {
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

const Collection = ({
  apiData,
  setApiData,
  isLoading,
  setIsLoading,
  handleSetFav,
  user,
  setAlertType,
  setAlertMessage,
}) => {
  const [favData, setFavData] = useState(null);

  useEffect(() => {
    async function fetchOnLoad() {
      setIsLoading(true);
      await fetchFavouriteList(user, setAlertType, setAlertMessage, setFavData);
      setIsLoading(false);
    }

    return fetchOnLoad();
    //eslint-disable-next-line
  }, []);
  return (
    <div style={collectionWindowStyle.div}>
      <LoadingSpinner isLoading={isLoading} />
      <CardDeck data={favData} handleSetFav={handleSetFav} />
    </div>
  );
};

export default Collection;
