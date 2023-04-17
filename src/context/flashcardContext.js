import React, { createContext, useState, useEffect, useContext } from 'react';
import { getFlashcards, createFlashcard, updateFlashcard, deleteFlashcard } from '../services/flashcards';

const FlashcardContext = createContext();
const useFlashcardContext = () => useContext(FlashcardContext);

const flashcardContextInitialState = {
  flashcards: [],
  selectedFlashcard: {},
  loading: true
};

const FlashcardContextProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState(flashcardContextInitialState.flashcards);
  const [selectedFlashcard, setSelectedFlashcard] = useState(flashcardContextInitialState.selectedFlashcard);
  const [loading, setLoading] = useState(flashcardContextInitialState.loading);

  const loadFlashcards = async () => {
    try {
      setLoading(true)
      const response = await getFlashcards();
      setFlashcards(response);
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  };

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

  const state = {
    flashcards,
    selectedFlashcard,
    loading
  };

  const stateSetters = {
    setFlashcards,
    setSelectedFlashcard
  };

  const handlers = {
    loadFlashcards,
    addFlashcard,
    updateFlashcardById,
    deleteFlashcardById
  };

  return (
    <FlashcardContext.Provider value={{ state, stateSetters, handlers }}>
      {children}
    </FlashcardContext.Provider>
  );
};

export { FlashcardContextProvider, useFlashcardContext };
