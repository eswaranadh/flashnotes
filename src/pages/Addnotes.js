import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from "react-router-dom"
import { useNotesContext } from '../context/noteContext';

function Addnotes() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { handlers } = useNotesContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        if ((event.ctrlKey && event.keyCode === 13) || event.type === 'click') {
            await handlers.addNote({ title, body });
            setLoading(false);
            setTitle('');
            setBody('');
            navigate('/notes');
        }
    };

    return (
        <div>
            <section>
                <header className="create-note__header">
                    <Link to="/notes" className="btn"><IoIosArrowBack /></Link>
                    <div>
                        <button className="btn" onClick={handleSubmit}>Save</button>
                    </div>
                </header>
                <form className="create-note__form" onSubmit={handleSubmit} >
                    <input style={{ outline: "none" }} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                    <textarea style={{ outline: "none" }} rows="28" placeholder="Note details..." value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </form>
            </section>
        </div>
    )
}

export default Addnotes