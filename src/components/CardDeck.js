//----------→ Framework Imports
import { Box } from '@mui/system';

//----------→ Component Imports
import BookCard from './BookCard';

const CardDeck = ({ data }) => {
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
        data.map(book => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            imgUrl={book.imgUrl}
            review={book.review}
            description={book.description}
          />
        ))}
    </Box>
  );
};

export default CardDeck;
