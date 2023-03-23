import api from './api';

export const getAllNotes = async () => {
    const response = await api.get('/notes');
    return response;
};

export const getNotesById = async (id) => {
    const response = await api.get(`/notes/${id}`);
    return response;
};

export const createNotes = async (notesData) => {
    const response = await api.post('/notes', notesData);
    return response;
};

export const updateNotes = async (id, notesData) => {
    const response = await api.put(`/notes/${id}`, notesData);
    return response;
};

export const deleteNotes = async (id) => {
    const response = await api.delete(`/notes/${id}`);
    return response;
};
