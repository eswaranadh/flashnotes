import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllNotes, createNotes, updateNotes, deleteNotes } from '../services/notes';

const NotesContext = createContext();
const useNotesContext = () => useContext(NotesContext);

const notesContextInitialState = {
    notes: [],
    selectedNote: {},
    loading: true
}

const NotesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState(notesContextInitialState.notes);
    const [selectedNote, setSelectedNote] = useState(notesContextInitialState.selectedNote);
    const [loading, setLoading] = useState(notesContextInitialState.loading);

    const loadAllNotes = async () => {
        try {
            setLoading(true)
            const response = await getAllNotes();
            setNotes(response);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    };

    const addNote = async (note) => {
        try {
            const response = await createNotes(note);
            setNotes([...notes, response]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateNoteById = async (id, updatedNote) => {
        try {
            const response = await updateNotes(id, updatedNote);
            const updatedNotes = notes.map(note => note.id === id ? response : note);
            setNotes(updatedNotes);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteNoteById = async (id) => {
        try {
            await deleteNotes(id);
            const updatedNotes = notes.filter(note => note.id !== id);
            setNotes(updatedNotes);
        } catch (error) {
            console.error(error);
        }
    };


    const state = {
        notes,
        selectedNote,
        loading
    };

    const stateSetters = {
        setNotes,
        setSelectedNote
    };

    const handlers = {
        loadAllNotes,
        addNote,
        updateNoteById,
        deleteNoteById
    };


    return (
        <NotesContext.Provider value={{ state, stateSetters, handlers }}>
            {children}
        </NotesContext.Provider>
    );
};

export { NotesContextProvider, useNotesContext };
