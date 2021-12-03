//This is the "Sign up" section of the app
//its accessed with router/ switch

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import LoadingSpinner from '../components/LoadingSpinner';
import SignUpForm from '../components/SignUpForm';
import CustomizedSnackbars from '../components/CustomizedSnackbars';

const SignUp = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  stayLoggedIn,
  setStayLoggedIn,
  handleSignUpSubmit,
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
          Sign Up
        </Typography>
        <LoadingSpinner isLoading={isLoading} />
        <SignUpForm
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
          stayLoggedIn={stayLoggedIn}
          setStayLoggedIn={setStayLoggedIn}
          handleSignUpSubmit={handleSignUpSubmit}
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

export default SignUp;
