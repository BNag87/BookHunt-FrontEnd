import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = ({ isLoading }) => {
  return (
    <Box
      sx={{
        visibility: isLoading ? 'visible' : 'hidden',
        display: 'flex',
        justifyContent: 'center',
        padding: 1,
      }}
    >
      <CircularProgress size={50} sx={{}} />
    </Box>
  );
};

export default LoadingSpinner;
