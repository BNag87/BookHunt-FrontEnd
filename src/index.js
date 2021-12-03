import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0,150,0,0.8)',
      dark: 'rgba(0,100,0,0.8)',
      light: 'rgba(0,200,0,0.5)',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontFamily: "'Rufina', serif",
      fontSize: '4rem',
      fontVariant: 'small-caps',
    },
    h2: {
      fontFamily: "'Rufina', serif",
      fontSize: '3rem',
      fontVariant: 'small-caps',
    },
    h3: {
      fontFamily: "'Rufina', serif",
      fontSize: '1.5rem',
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
