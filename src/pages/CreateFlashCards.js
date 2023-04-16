import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import ReactQuill from 'react-quill';

function CreateFlashCards() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [showFront, setShowFront] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with front and back text
    };
    return (
        <div className='d-flex' >
            <div className='flashcard_form' >
                <form className="create-note__form" onSubmit={handleSubmit} >
                    <input type="file" />
                    <input style={{ outline: "none" }} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                    <textarea style={{ outline: "none" }} rows="2" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </form>
            </div>
            <div className='flashcards_container create-note__form' >
                <div className="flashcard_view">
                    <textarea style={{ outline: "none" }} rows="2" placeholder="Front" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <br />
                <div className="flashcard_view">
                    <textarea style={{ outline: "none" }} rows="2" placeholder="Back" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                </div>
            </div>
        </div>
    );
}

export default CreateFlashCards;
