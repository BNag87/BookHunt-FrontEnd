import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = ({ isLoading }) => {
  return (
    <Box
      sx={{
        display: isLoading ? 'flex' : 'none',
        justifyContent: 'center',
        width: '100%',
        padding: 1,
      }}
    >
      <CircularProgress size={50} sx={{}} />
    </Box>
  );
};

export default LoadingSpinner;
