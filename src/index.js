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
import { DeckContextProvider } from './context/deckContext';


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <NotesContextProvider>
        <DeckContextProvider>
          <FlashcardContextProvider>
            <App />
          </FlashcardContextProvider>
        </DeckContextProvider>
      </NotesContextProvider>
    </AuthProvider>
  </Router>
);

