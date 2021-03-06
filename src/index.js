import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(181, 225, 190,1)',
      dark: 'rgba(87,144,105,1)',
      light: 'rgba(197, 231, 226,1)',
    },
    secondary: {
      main: 'rgb(190, 152, 110)',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Spectral SC', serif",
      fontSize: '4rem',
      fontVariant: 'small-caps',
    },
    h2: {
      fontFamily: "'Spectral SC', serif",
      fontSize: '3rem',
      fontVariant: 'small-caps',
    },
    h3: {
      fontFamily: "'Spectral SC', serif",
      fontSize: '2rem',
      textAlign: 'center',
      fontVariant: 'small-caps',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
