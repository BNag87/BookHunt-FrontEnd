//----------→ Framework Imports
import { Button, Paper, Popover, Typography } from '@mui/material';
import { useState } from 'react';

const BookDescription = ({ description }) => {
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
    <Paper variant="outlined" sx={{ mb: 1.5, width: '90%' }}>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        sx={{ width: '100%', color: 'text.primary' }}
      >
        View Description...
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{}}
      >
        <Typography
          variant="body1"
          sx={{
            p: 3,
            maxWidth: '300px',
            maxHeight: '300px',
            overflowY: 'auto',
          }}
        >
          {description}
        </Typography>
      </Popover>
    </Paper>
  );
};

export default BookDescription;
