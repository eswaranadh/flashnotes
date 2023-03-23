import api from './api';

export const getFlashcards = async () => {
  const response = await api.get('/flashcards');
  return response
};

export const getFlashcardById = async (id) => {
  const response = await api.get(`/flashcards/${id}`);
  return response
};

export const createFlashcard = async (flashcardData) => {
  const response = await api.post('/flashcards', flashcardData);
  return response
};

export const updateFlashcard = async (id, flashcardData) => {
  const response = await api.put(`/flashcards/${id}`, flashcardData);
  return response
};

export const deleteFlashcard = async (id) => {
  const response = await api.delete(`/flashcards/${id}`);
  return response
};
