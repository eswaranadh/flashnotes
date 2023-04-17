import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FlashcardItem({ flashcard }) {
    const navigate = useNavigate();

    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        console.log(flipped);
        setFlipped(!flipped);
    };

    return (
        <div
            className={`deckcard_view${flipped ? ' flip' : ''}`}
            onClick={handleClick}
        >
            <div className="card-front">
                {flashcard.front}
            </div>
            <div className="card-back">
                {flashcard.back}
            </div>
        </div>
    );
}

export default FlashcardItem