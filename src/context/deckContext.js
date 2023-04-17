import React, { createContext, useState, useContext } from 'react';
import { getDecks, createDeck, updateDeck, deleteDeck } from '../services/deck';
import { useNavigate } from 'react-router-dom';

const DeckContext = createContext();
const useDeckContext = () => useContext(DeckContext);

const deckContextInitialState = {
    decks: [],
    selectedDeck: {},
    loading: true
};

const DeckContextProvider = ({ children }) => {
    const [decks, setDecks] = useState(deckContextInitialState.decks);
    const [selectedDeck, setSelectedDeck] = useState(deckContextInitialState.selectedDeck);
    const [loading, setLoading] = useState(deckContextInitialState.loading);
    const navigate = useNavigate()

    const loadDecks = async () => {
        try {
            setLoading(true)
            const response = await getDecks();
            setDecks(response);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    };

    const addDeck = async (deck) => {
        try {
            const response = await createDeck(deck);
            setDecks([...decks, response]);
            navigate('/flashcards/' + response.id)
        } catch (error) {
            console.error(error);
        }
    };

    const updateDeckById = async (id, updatedDeck) => {
        try {
            const response = await updateDeck(id, updatedDeck);
            const updatedDecks = decks.map(deck => deck.id === id ? response : deck);
            setDecks(updatedDecks);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteDeckById = async (id) => {
        try {
            await deleteDeck(id);
            const updatedDecks = decks.filter(deck => deck.id !== id);
            setDecks(updatedDecks);
        } catch (error) {
            console.error(error);
        }
    };

    const state = {
        decks,
        selectedDeck,
        loading
    };

    const stateSetters = {
        setDecks,
        setSelectedDeck
    };

    const handlers = {
        loadDecks,
        addDeck,
        updateDeckById,
        deleteDeckById
    };

    return (
        <DeckContext.Provider value={{ state, stateSetters, handlers }}>
            {children}
        </DeckContext.Provider>
    );
};

export { DeckContextProvider, useDeckContext };
