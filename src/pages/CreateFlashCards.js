import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import ReactQuill from 'react-quill';
import { BsPlusLg } from 'react-icons/bs'
import useCustomDialog from '../hooks/useCustomDialog';
import Button from 'react-bootstrap/Button';
import { useFlashcardContext } from '../context/flashcardContext';
import { useDeckContext } from '../context/deckContext';

function CreateFlashCards() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [showFront, setShowFront] = useState(true);
    const { openDialog, renderContent, closeDialog } = useCustomDialog()
    const { handlers } = useFlashcardContext()
    const { handlers: deckHandlers } = useDeckContext()

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    const handleAddCard = async (event) => {
        event.preventDefault();
        await handlers.addFlashcard({
            front,
            back
        })
    };

    const dialogContent = () => {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="flashcard_view">
                    <textarea
                        style={{ border: "none", outline: "none", width: "100%", height: "100%", resize: "none" }}
                        rows="2"
                        placeholder="Front"
                        value={front}
                        onChange={(e) => setFront(e.target.value)}
                    />
                </div>
                <br />
                <div className="flashcard_view">
                    <textarea
                        style={{ border: "none", resize: "none", outline: "none", width: "100%", height: "100%" }}
                        rows="2"
                        placeholder="Back"
                        value={back}
                        onChange={(e) => setBack(e.target.value)}
                    />
                </div>
            </div>
        )
    }

    const dialogActions = () => {
        return (
            <div>
                <Button variant='light' onClick={closeDialog} >
                    Close
                </Button>
                {" "}
                <Button variant='primary' onClick={handleAddCard} >
                    Add
                </Button>
            </div>
        )
    }

    return (
        <div>
            <div className='flashcards_container create-note__form' >
                <div onClick={openDialog} className="c-pointer add_flashcard_view">
                    <BsPlusLg size={30} />
                </div>
            </div>
            {renderContent({
                dialogContent: dialogContent(),
                hideButton: true,
                dialogActions: dialogActions()
            })}
        </div>
    );
}

export default CreateFlashCards;
