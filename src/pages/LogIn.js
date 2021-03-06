//This is the "Login" section of the app
//its accessed with router/ switch

import { Typography } from '@mui/material';
import LoadingSpinner from '../components/LoadingSpinner';
import LogInForm from '../components/LogInForm';
import { Box } from '@mui/system';
import CustomizedSnackbars from '../components/CustomizedSnackbars';


const LogIn = ({
  email,
  setEmail,
  pass,
  setPass,
  stayLoggedIn,
  setStayLoggedIn,
  handleLogInSubmit,
  isLoading,
  openAlert,
  setOpenAlert,
  alertType,
  alertMessage
}) => {

  return (
    <>
      <Box sx={{ maxWidth: '900px', margin: '0 auto' }}>
        <Typography
          variant="h1"
          component="div"
          sx={{ margin: '2rem auto', textAlign: 'center' }}
        >
          Log In
        </Typography>
        <LoadingSpinner isLoading={isLoading} />
        <LogInForm
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
          stayLoggedIn={stayLoggedIn}
          setStayLoggedIn={setStayLoggedIn}
          handleLogInSubmit={handleLogInSubmit}
        />
        <CustomizedSnackbars
        openAlert = {openAlert}
        setOpenAlert= {setOpenAlert}
        alertType = {alertType}
        message={alertMessage}
        />
      </Box>
    </>
  );
};

export default LogIn;
