import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/authContext';
import NoteProvider from './context/noteContext';
import FlashcardProvider from './context/flashcardContext';
import App from './App';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';

const theme = createTheme({
  //here you set palette, typography ect...
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          {/* <NoteProvider> */}
          <FlashcardProvider>
            <App />
          </FlashcardProvider>
          {/* </NoteProvider> */}
        </AuthProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

