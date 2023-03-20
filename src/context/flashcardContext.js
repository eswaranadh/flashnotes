import React, { createContext, useState, useEffect } from 'react';
import { getFlashcards, createFlashcard, updateFlashcard, deleteFlashcard } from '../services/flashcards';

export const FlashcardContext = createContext();

const FlashcardContextProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);

  const addFlashcard = async (flashcard) => {
    try {
      const response = await createFlashcard(flashcard);
      setFlashcards([...flashcards, response]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateFlashcardById = async (id, updatedFlashcard) => {
    try {
      const response = await updateFlashcard(id, updatedFlashcard);
      const updatedFlashcards = flashcards.map(flashcard => flashcard.id === id ? response : flashcard);
      setFlashcards(updatedFlashcards);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFlashcardById = async (id) => {
    try {
      await deleteFlashcard(id);
      const updatedFlashcards = flashcards.filter(flashcard => flashcard.id !== id);
      setFlashcards(updatedFlashcards);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FlashcardContext.Provider value={{ flashcards, selectedFlashcard, setSelectedFlashcard, addFlashcard, updateFlashcardById, deleteFlashcardById }}>
      {children}
    </FlashcardContext.Provider>
  );
};

export default FlashcardContextProvider;
