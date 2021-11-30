import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from '@mui/material';

const BookDescription = ({ description }) => {
  return (
    <Paper variant="outlined" sx={{ mb: 1.5, width: '90%' }}>
      <Accordion sx={{ '&::before': { display: 'none' } }} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          id="bookDescription"
          aria-controls="expandedBookDescription"
        >
          {description.substring(0, 20)}...
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default BookDescription;
