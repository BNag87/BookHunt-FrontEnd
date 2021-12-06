//----------→ Framework Imports
import { useEffect, useState } from 'react';
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
  publishYear,
  numPages,
  amazonId,
  handleSetFav,
  user,
  handleSetRating,
  userFav,
  userRating,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(2.5);

  useEffect(() => {
    if (userFav) setIsFavourite(true);
    if (userRating) setRating(userRating);
  }, [userFav, userRating]);

  // If no amazonId then return amazon search results as link
  let amazonLink;
  if (amazonId) amazonLink = `https://www.amazon.co.uk/dp/${amazonId}`;
  else
    amazonLink = encodeURI(
      `https://www.amazon.co.uk/s/?url=search-alias%3Dstripbooks&field-keywords=${title} ${author}`
    );

  // // Look through favourites and set values for any previously favourited books
  // if (favData)
  //   favData.forEach(favourite => favourite === id && setIsFavourite(true));

  // // Look through ratings and set values for any previously rated books
  // if (ratingData)
  //   ratingData.forEach(rating => rating.id === id && setRating(rating.score));

  const handleFavClick = async e => {
    if (!user) return;

    const id = e.target.closest('.favourite-icon').id;

    // pass the opposite of isFavourite so the handler doesn't need
    // to wait for the setState to run to received the new value
    await handleSetFav(id, !isFavourite);
    setIsFavourite(prev => !prev);
  };

  const handleRateClick = async e => {
    if (!user) return;

    const score = +e.target.value;
    const id = e.target.closest('.rating-icon').id;
    await handleSetRating({ id, score });
    setRating(score);
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
            className="rating-icon"
            value={rating}
            precision={0.5}
            size="large"
            sx={{ mr: 1.5 }}
            id={id}
            onChange={handleRateClick}
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
