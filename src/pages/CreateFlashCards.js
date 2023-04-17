import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import ReactQuill from 'react-quill';
import { BsPlusLg } from 'react-icons/bs'
import useCustomDialog from '../hooks/useCustomDialog';
import Button from 'react-bootstrap/Button';
import { useFlashcardContext } from '../context/flashcardContext';
import { useDeckContext } from '../context/deckContext';
import { useParams } from 'react-router-dom';
import FlashcardItem from '../components/Flashcards/FlashcardItem';

function CreateFlashCards() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [showFront, setShowFront] = useState(true);
    const { openDialog, renderContent, closeDialog } = useCustomDialog()
    const { handlers, state } = useFlashcardContext()
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        handlers.loadFlashcardsByDeckId(id)
    }, [id])

    const handleAddCard = async (event) => {
        event.preventDefault();
        setLoading(true)
        await handlers.addFlashcard({
            front,
            back,
            deckId: id
        })
        setFront("")
        setBack("")
        setLoading(false)
        closeDialog()
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
                    {loading ? "Adding" : "Add"}
                </Button>
            </div>
        )
    }

    return (
        <div>
            <div className='decks__container' >
                {
                    state.flashcards.map(card => {
                        return (
                            <FlashcardItem
                                key={card.id}
                                flashcard={card}
                            />
                        )
                    })
                }
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
