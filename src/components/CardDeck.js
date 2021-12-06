//----------→ Framework Imports
import { Box } from '@mui/system';

//----------→ Component Imports
import BookCard from './BookCard';

const CardDeck = ({ data, handleSetFav, handleSetRating }) => {

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
        data.docs.map(book => (
          <BookCard
            key={book.key.replace('/works/', '')}
            id={book.key.replace('/works/', '')}
            title={book.title}
            author={book.author_name[0]}
            imgUrl={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
            // review={book.volumeInfo.averageRating}
            review={2.5}
            publishYear={book.first_publish_year}
            numPages={book.number_of_pages_median}
            amazonId={book.id_amazon?.[0]}
            handleSetFav={handleSetFav}

            handleSetRating={handleSetRating}

            user={user}

          />
        ))}
    </Box>
  );
};

export default CardDeck;
