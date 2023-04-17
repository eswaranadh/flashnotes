import React from 'react'
import { useNavigate } from 'react-router-dom'

function FlashcardItem({ flashcard }) {
    const navigate = useNavigate()
    return (
        <div className="flashcard_view">
            {flashcard.front}
        </div>
    )
}

export default FlashcardItem