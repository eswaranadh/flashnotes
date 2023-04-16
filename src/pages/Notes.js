import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { useState } from 'react';
import NoteItem from '../components/Notes/NoteItem';
import { useNotesContext } from '../context/noteContext';
import Loader from '../components/Shared/Loader/Loader';

function Notes() {
    const { state, handlers } = useNotesContext()
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('')

    useEffect(() => {
        handlers.loadAllNotes()
    }, [])

    const handleSearch = () => {

    }

    useEffect(handleSearch, [text])

    if (state.loading)
        return <Loader />

    return (
        <section>
            <header className="notes__header">
                {!showSearch && <h2></h2>}
                {showSearch && <input type="text" value={text} onChange={(e) => { setText(e.target.value); handleSearch(); }} autoFocus placeholder='Keyword...' />}
                <div>
                    <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose /> : <CiSearch />}</button>
                </div>
            </header>
            <div className="notes__container">
                {state.notes.length > 0 ? (
                    state.notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                        />
                    ))
                ) : (
                    <p className="no-notes">No notes yet. Start creating!</p>
                )}
            </div>
            <Link to="/create-note" className='btn add__btn'><BsPlusLg /></Link>
        </section>
    );
}

export default Notes;
