import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarFormatter } from '../../utils/CalendarFormatter'

const NoteItem = ({ note }) => {
    console.log(note);
    return (
        <Link to={`/edit-note/${note.noteId}`} className="note">
            <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + '...' : note.title}</h4>
            <p>{CalendarFormatter.standardDateFormat(note.createdAt)}</p>
        </Link>
    )
}

export default NoteItem