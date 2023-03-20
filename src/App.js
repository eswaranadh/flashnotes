import React from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { firebaseAuth } from './services/firebase';

function App() {
  if (firebaseAuth()) {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/notes/:id" element={<NoteDetails />} />
          <Route exact path="/flashcards" element={<Flashcards />} />
          <Route exact path="/flashcards/:id" element={<FlashcardDetails />} /> */}
        <Route path="/404" element={<NotFound />} />
      </Routes>
    )
  }
  return (
    <div>
      <Routes>
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        {/* <Route path="/404" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
