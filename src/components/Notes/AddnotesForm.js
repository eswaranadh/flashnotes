import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { useNotesContext } from '../../context/noteContext';
import './AddnotesForm.css';

const AddNotesForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { handlers } = useNotesContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (value) => {
        setBody(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        await handlers.addNote({ title, body })
        setLoading(false)
        setTitle('');
        setBody('');
        navigate('/notes')
    };

    return (
        <div className="add-notes-container">
            <div className="add-notes-box">
                <div className="add-notes-header">
                    <h2 className="add-notes-title">Add Notes</h2>
                </div>
                <form onSubmit={handleSubmit} className="add-notes-form">
                    <div className="form-group">
                        <input type="text" value={title} onChange={handleTitleChange} className="form-input-title" placeholder="Enter your note title" />
                    </div>
                    <div className="form-group">
                        <ReactQuill
                            value={body}
                            onChange={handleBodyChange}
                            className="form-input-body"
                            placeholder="Enter your note body"

                        />
                    </div>
                    <button type="submit" className="add-notes-button">
                        {loading ? <Spinner /> : "Add Note"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNotesForm;
