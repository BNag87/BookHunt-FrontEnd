//This is the "Account" section of the app
//its accessed with router/ switch

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import LoadingSpinner from '../components/LoadingSpinner';
import AccountForm from '../components/AccountForm';
import CustomizedSnackbars from '../components/CustomizedSnackbars';

const Account = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  currentPass,
  setCurrentPass,
  handleAccountSubmit,
  isLoading,
  handleDeleteAccount,
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
          Edit Account
        </Typography>
        <LoadingSpinner isLoading={isLoading} />
        <AccountForm
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          pass={pass}
          currentPass={currentPass}
          setCurrentPass={setCurrentPass}
          setPass={setPass}
          handleAccountSubmit={handleAccountSubmit}
          handleDeleteAccount={handleDeleteAccount}
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

export default Account;
