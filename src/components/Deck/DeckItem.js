import React from 'react'
import { useNavigate } from 'react-router-dom'

function DeckItem({ deck }) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/flashcards/" + deck.id)} className="deckcard_view">
            {deck.title}
            <div style={{ fontSize: "12px" }} >
                {deck?.description ?? ''}
            </div>
        </div>
    )
}

export default DeckItem