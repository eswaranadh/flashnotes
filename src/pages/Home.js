import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My Notes and Flashcards App</h1>
      <p>
        This is a simple web application that allows you to create, manage, and
        study notes and flashcards. To get started, please sign up or log in.
      </p>
    </div>
  );
};

export default Home;
