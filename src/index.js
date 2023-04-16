import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { FlashcardContextProvider } from './context/flashcardContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotesContextProvider } from './context/noteContext';
import './index.css'
import 'react-quill/dist/quill.snow.css';


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <NotesContextProvider>
        <FlashcardContextProvider>
          <App />
        </FlashcardContextProvider>
      </NotesContextProvider>
    </AuthProvider>
  </Router>
);

