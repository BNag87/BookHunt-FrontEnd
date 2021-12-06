//----------→ Framework Imports
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Rating,
  Typography,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

//----------→ Component Imports
import BookDetails from './BookDetails';

const BookCard = ({
  id,
  title,
  author,
  imgUrl,
  review,
  publishYear,
  numPages,
  amazonId,
  handleSetFav,
  user,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  // Get the rating as a number
  const bookRating = +review;

  // If no amazonId then return amazon search results as link
  let amazonLink;
  if (amazonId) amazonLink = `https://www.amazon.co.uk/dp/${amazonId}`;
  else
    amazonLink = encodeURI(
      `https://www.amazon.co.uk/s/?url=search-alias%3Dstripbooks&field-keywords=${title} ${author}`
    );

  const handleFavClick = e => {
    if (!user) {
      console.log('no user');
      return;
    }
    const id = e.target.closest('.favourite-icon').id;

    // pass the opposite of isFavourite so the handler doesn't need
    // to wait for the setState to run to received the new value
    handleSetFav(id, !isFavourite);
    setIsFavourite(prev => !prev);
  };

  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ borderRadius: '5px' }}>
          <CardMedia
            component="img"
            elevation={3}
            image={imgUrl}
            alt={`${title} book cover`}
            sx={{
              width: '200px',
              height: '300px',
              borderRadius: 'inherit',
            }}
          />
        </Paper>
        <Typography variant="h3" sx={{ mb: 2.5, mt: 3, height: '4.5rem' }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mb: 2.5, fontSize: '1.3rem' }}>
          by {author}
        </Typography>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 1,
            mb: 2,
            fontSize: '1.7rem',
          }}
          elevation={2}
        >
          <Rating
            name={`${title} rating`}
            value={bookRating}
            precision={0.1}
            size="large"
            sx={{ mr: 1.5 }}
          />
          <IconButton
            aria-label="add book to favourites"
            className="favourite-icon"
            id={id}
            onClick={handleFavClick}
            sx={{ fontSize: 'inherit' }}
          >
            {isFavourite ? (
              <Favorite sx={{ color: 'red' }} fontSize="inherit" id={id} />
            ) : (
              <FavoriteBorder fontSize="inherit" id={id} />
            )}
          </IconButton>
        </Paper>
        <BookDetails
          publishYear={publishYear}
          numPages={numPages}
          amazonLink={amazonLink}
        />
      </CardContent>
    </Card>
  );
};

export default BookCard;
