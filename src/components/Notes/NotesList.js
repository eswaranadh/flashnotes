import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useNotesContext } from '../../context/noteContext';
import Loader from '../Shared/Loader/Loader';
import NotesCard from './NotesCard';
import './NotesList.css';

function NotesList() {
    const { state, handlers } = useNotesContext()

    useEffect(() => {
        handlers.loadAllNotes()
    }, [])

    if (state.loading)
        return <Loader />

    return (
        <div className="notes-container">
            {state.notes.length > 0 ? (
                state.notes.map((note) => (
                    <NotesCard
                        body={note.body}
                        title={note.title}
                        color={note.color}
                        onDeleteNote={() => { }}
                        onEditNote={() => { }}
                        date={new Date(note.createdAt).toDateString()}
                        key={'fdf'}
                    />
                ))
            ) : (
                <p className="no-notes">No notes yet. Start creating!</p>
            )}
        </div>
    );
}

export default NotesList;
