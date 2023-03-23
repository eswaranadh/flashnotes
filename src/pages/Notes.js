import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotesList from '../components/Notes/NotesList'

function Notes() {
    const navigate = useNavigate()
    return (
        <div style={{ margin: "20px" }} >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <div>
                    <button onClick={() => navigate("/notes/add")} >Add Notes</button>
                </div>
            </div>
            <NotesList />
        </div>
    )
}

export default Notes