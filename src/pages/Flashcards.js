import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import { useState } from 'react';
import Loader from '../components/Shared/Loader/Loader';
import { useFlashcardContext } from '../context/flashcardContext';
import FlashcardItem from '../components/Flashcards/FlashcardItem';
import { useDeckContext } from '../context/deckContext';
import DeckItem from '../components/Deck/DeckItem';

function Flashcards() {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('')
    const { handlers: deckHandlers, state } = useDeckContext()


    useEffect(() => {
        deckHandlers.loadDecks()
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
                    <button className='btn btn-primary' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose /> : <CiSearch />}</button>
                </div>
            </header>
            <div className="decks__container">
                {state.decks.length > 0 ? (
                    state.decks.map((deck) => (
                        <DeckItem
                            key={deck.id}
                            deck={deck}
                        />
                    ))
                ) : (
                    <p className="no-notes">No flash cards yet. Start creating!</p>
                )}
            </div>
            <Link to="/create-deck" className='btn btn-primary add__btn'><BsPlusLg /></Link>
        </section>
    );
}

export default Flashcards;
