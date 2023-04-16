import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './App.css'
import Navbar from './components/Shared/Navbar';
import { useAuthContext } from './context/authContext';
import Loader from './components/Shared/Loader/Loader';
import Signup from './pages/Signup';
import Notes from './pages/Notes';
import Addnotes from './pages/Addnotes';
import EditNote from './pages/EditNote';
import CreateFlashCards from './pages/CreateFlashCards';

function App() {
  const { state } = useAuthContext()

  if (state.isLoading)
    return <Loader />

  if (Object.keys(state?.user ?? {}).length) {
    return (
      <>
        <Navbar />
        <div style={{ marginLeft: "220px", marginTop: "70px", padding: "10px" }} >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route exact path="/notes" element={<Notes />} />
            <Route exact path="/create-note" element={<Addnotes />} />
            <Route exact path="/edit-note/:id" element={<EditNote />} />
            <Route exact path="/create-flash-cards" element={<CreateFlashCards />} />
            {/* <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} /> */}
            {/* <Route exact path="/notes/:id" element={<NoteDetails />} />
          <Route exact path="/flashcards" element={<Flashcards />} />
          <Route exact path="/flashcards/:id" element={<FlashcardDetails />} /> */}
            <Route path="/404" element={<NotFound />} />
            <Route
              path="*"
              element={<Navigate to="/" replace={true} />}
            />
          </Routes>
        </div>
      </>
    )
  }
  return (
    <div>
      <Routes>
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={<Navigate to="/" replace={true} />}
        />
        {/* <Route path="/404" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
