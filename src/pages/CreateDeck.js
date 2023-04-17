import React, { useState } from 'react';
import { useDeckContext } from '../context/deckContext';

const CreateDeckForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const { handlers: deckHandlers } = useDeckContext()
    const [loading, setLoading] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        await deckHandlers.addDeck({
            title,
            description
        });
        setLoading(false)
    };

    return (
        <div className="create-deck-form-container">
            <h2>Create a New Deck</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control border-bottom" id="title" value={title} onChange={handleTitleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea style={{ resize: "none" }} className="form-control border-bottom" id="description" rows="3" value={description} onChange={handleDescriptionChange} required></textarea>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control-file" id="image" onChange={handleImageChange} required />
                </div> */}
                <button type="submit" disabled={loading} className="btn btn-primary">{loading ? "Creating" : "Create Deck"}</button>
            </form>
        </div>
    );
};

export default CreateDeckForm;

