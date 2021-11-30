import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import BookDescription from './BookDescription';

const BookCard = ({ title, author, imgUrl, review, description }) => {
  // Remove author/summary from title
  const formattedTitle = title.split(':')[0];

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
        <Typography variant="h3" sx={{ mb: 3, mt: 3, fontSize: '1.5rem' }}>
          {formattedTitle}
        </Typography>
        <Typography variant="h4" sx={{ mb: 1.5, mt: 1.5, fontSize: '1.3rem' }}>
          by {author}
        </Typography>
        <Typography variant="body" sx={{ fontFamily: 'inherit' }}>
          {review}
        </Typography>
        <BookDescription description={description} />
        {/* <CardDetails avgRating={avgRating} genres={genres} /> */}
      </CardContent>
    </Card>
  );
};

export default BookCard;
