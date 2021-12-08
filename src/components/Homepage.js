//import an image for bg use
// import background from '../images/pageBG2.png';

//----------→ Component Imports
import { Pagination } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import CardDeck from './CardDeck';
import LoadingSpinner from './LoadingSpinner';
import SearchForm from './SearchForm';

var homepageWindowStyle = {
  div: {
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

  numPages,
}) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchOnLoad() {
      setIsLoading(true);
      await getUser(setUser, setStayLoggedIn);

      setIsLoading(false);
    }

    return fetchOnLoad();
    //eslint-disable-next-line
  }, []);

  const handleChangePage = async (e, value) => {
    if (!searchType || !query)
      await handleSearchBooks(
        {
          type: 'subject',
          query: 'Fiction, thrillers, general',
        },
        value
      );
    else await handleSearchBooks({ type: searchType, query: query }, value);
    setCurrentPage(value);
  };

  return (
    <div style={homepageWindowStyle.div}>
      <LoadingSpinner isLoading={isLoading} />
      <SearchForm
        query={query}
        setQuery={setQuery}
        searchType={searchType}
        setSearchType={setSearchType}
        handleSearchBooks={handleSearchBooks}
        setCurrentPage={setCurrentPage}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4, pb: 1 }}>
        <Pagination
          count={numPages}
          page={currentPage}
          onChange={handleChangePage}
          color="secondary"
          showFirstButton
          showLastButton
          siblingCount={1}
          size="large"
        />
      </Box>
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
