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
import BookDescription from './BookDescription';

const BookCard = ({ title, author, imgUrl, review, description }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  // Remove author/summary from title
  const formattedTitle = title.split(':')[0];

  // Get the rating as a number
  const bookRating = +review.split(' ')[0];

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
            alt={`${formattedTitle} book cover`}
            sx={{
              width: '200px',
              height: '300px',
              borderRadius: 'inherit',
            }}
          />
        </Paper>
        <Typography variant="h3" sx={{ mb: 2.5, mt: 3, fontSize: '1.5rem' }}>
          {formattedTitle}
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
            readOnly
            size="large"
            sx={{ mr: 1.5 }}
          />
          <IconButton
            aria-label="add book to favourites"
            onClick={() => setIsFavourite(prev => !prev)}
            sx={{ fontSize: 'inherit' }}
          >
            {isFavourite ? (
              <Favorite sx={{ color: 'red' }} fontSize="inherit" />
            ) : (
              <FavoriteBorder fontSize="inherit" />
            )}
          </IconButton>
        </Paper>
        <BookDescription description={description} />
      </CardContent>
    </Card>
  );
};

export default BookCard;
