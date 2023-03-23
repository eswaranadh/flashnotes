import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import FlashcardProvider from './context/flashcardContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      {/* <NoteProvider> */}
      <FlashcardProvider>
        <App />
      </FlashcardProvider>
      {/* </NoteProvider> */}
    </AuthProvider>
  </Router>
);

