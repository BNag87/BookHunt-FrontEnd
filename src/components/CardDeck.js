//----------→ Framework Imports
import { Box } from '@mui/system';

//----------→ Component Imports
import BookCard from './BookCard';

const CardDeck = ({ data, handleSetFav, handleSetRating, user }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(325px, 1fr))',
        gridAutoRows: '1fr',
        placeItems: 'center',
        gap: '2rem',
        width: '90%',
        margin: '2rem auto',
      }}
    >
      {data &&
        data.docs.map(book => {
          const id = book.key.replace('/works/', '');
          const userFav = user.favourites.find(bookId => bookId === id);
          const userRating = user.ratings.find(
            rating => rating.id === id
          )?.score;
          return (
            <BookCard
              key={id}
              id={id}
              title={book.title}
              author={book.author_name[0]}
              imgUrl={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
              publishYear={book.first_publish_year}
              numPages={book.number_of_pages_median}
              amazonId={book.id_amazon?.[0]}
              handleSetFav={handleSetFav}
              handleSetRating={handleSetRating}
              user={user}
              userFav={userFav}
              userRating={userRating}
            />
          );
        })}
    </Box>
  );
};

export default CardDeck;
