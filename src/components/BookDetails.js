//----------→ Framework Imports
import { Button, Paper, Popover, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Highlight } from './Highlight';
const BookDetails = ({ publishYear, numPages, amazonLink }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'book-description-popover' : undefined;

  return (
    <Paper variant="outlined" sx={{ mb: 1.5, width: '80%' }}>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        sx={{ width: '100%', color: 'text.primary' }}
      >
        View Details...
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            p: 3,
            maxWidth: '300px',
            maxHeight: '300px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Highlight text={'First published'} />
            <Typography
              sx={{ fontSize: '1.4rem', marginLeft: 'auto', pl: 1 }}
              variant="body1"
            >
              {publishYear}
            </Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Highlight text={'Number of pages'} />
            <Typography
              sx={{ fontSize: '1.4rem', marginLeft: 'auto', pl: 1 }}
              variant="body1"
            >
              {numPages}
            </Typography>
          </Box>
          <Button
            sx={{ margin: 'auto', mt: 1, color: 'primary.dark' }}
            href={amazonLink}
            target="_blank"
            type="button"
            variant="outlined"
          >
            View on Amazon
          </Button>
        </Box>
      </Popover>
    </Paper>
  );
};

export default BookDetails;
