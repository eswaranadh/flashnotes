import api from './api';

export const getDecks = async () => {
    const response = await api.get('/decks');
    return response
};

export const getDeckById = async (id) => {
    const response = await api.get(`/decks/${id}`);
    return response
};

export const createDeck = async (deckData) => {
    const response = await api.post('/decks', deckData);
    return response
};

export const updateDeck = async (id, deckData) => {
    const response = await api.put(`/decks/${id}`, deckData);
    return response
};

export const deleteDeck = async (id) => {
    const response = await api.delete(`/decks/${id}`);
    return response
};
