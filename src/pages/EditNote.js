import React, { useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react';
import { useNotesContext } from '../context/noteContext';
import Loader from '../components/Shared/Loader/Loader';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';


const EditNote = ({ notes, setNotes }) => {
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate();
    const { handlers, state } = useNotesContext();
    const titleRef = useRef(null);
    const bodyRef = useRef(null);
    const titleUtteranceRef = useRef(new SpeechSynthesisUtterance());
    const bodyUtteranceRef = useRef(new SpeechSynthesisUtterance());

    const [isSpeechPlaying, setIsSpeechPlaying] = useState(false)
    const [activeTitleIndex, setActiveTitleIndex] = useState(-1);
    const [activeBodyIndex, setActiveBodyIndex] = useState(-1);

    useEffect(() => {
        handlers.getNoteById(id)

        return () => {
            handleStop()
        }
    }, [id])

    useEffect(() => {
        setTitle(state.selectedNote.title)
        setBody(state.selectedNote.body)
    }, [JSON.stringify(state.selectedNote)])



    const handleForm = async (event) => {
        event.preventDefault();
        if ((event.ctrlKey && event.keyCode === 13) || event.type === 'click') {
            await handlers.updateNoteById(id, { title, body })

            // redirect to home page
            navigate('/notes')
        }
    }



    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete?')) {
            const newNotes = notes.filter(item => item.id != id);

            setNotes(newNotes);
            navigate('/')
        }
    }

    const handleTitleStart = (event) => {
        const wordIndex = event.charIndex;
        setActiveTitleIndex(wordIndex);
    };

    const handleTitleEnd = () => {
        setActiveTitleIndex(-1);
    };

    const handleBodyStart = (event) => {
        const wordIndex = getWordIndex(body, event.charIndex);
        setActiveBodyIndex(wordIndex)
    };

    const handleBodyEnd = () => {
        setActiveBodyIndex(-1);
    };

    const handleListen = () => {
        setIsSpeechPlaying(true)
        const titleUtterance = titleUtteranceRef.current;
        titleUtterance.text = titleRef.current.value;
        titleUtterance.onboundary = handleTitleStart;
        titleUtterance.onend = handleTitleEnd;
        window.speechSynthesis.speak(titleUtterance);

        const bodyUtterance = bodyUtteranceRef.current;
        bodyUtterance.text = bodyRef.current.value;
        bodyUtterance.onboundary = handleBodyStart;
        bodyUtterance.onend = handleBodyEnd;
        window.speechSynthesis.speak(bodyUtterance);
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsSpeechPlaying(false)
    };

    if (state.loading)
        return <Loader />

    console.log(activeBodyIndex);

    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack /></Link>
                <div>
                    <button className="btn btn-primary" onClick={handleForm}>Save</button>
                </div>
                <div>
                    <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
                </div>
            </header>
            <form className="create-note__form" onSubmit={handleForm}>
                <input hidden={true} style={{ outline: "none" }} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus ref={titleRef} />
                <div className="highlight-container-title">
                    {title?.split('').map((word, index) => (
                        <span
                            key={index}
                            className={index === activeTitleIndex ? "highlight" : ""}
                        >
                            {word}
                        </span>
                    ))}
                </div>
                <div className='note-actions' >
                    {
                        !isSpeechPlaying ?
                            <span className="d-flex" style={{ color: "rgb(132, 133, 129)", cursor: "pointer" }} onClick={handleListen} >
                                <AiFillPlayCircle size={18} />
                                <span style={{ marginTop: "-2px", marginLeft: "4px" }} >Listen</span>
                            </span>
                            :

                            <span className="d-flex" style={{ color: "rgb(132, 133, 129)", cursor: "pointer" }} onClick={handleStop}>
                                <AiFillPauseCircle size={18} />
                                <span style={{ marginTop: "-2px", marginLeft: "4px" }} >Stop</span>
                            </span>
                    }
                </div>
                <hr />
                <textarea hidden={true} style={{ outline: "none" }} rows="28" placeholder="Note body..." value={body} onChange={(e) => setBody(e.target.value)} ref={bodyRef} ></textarea>
                <div className="highlight-container">
                    {body?.split('').map((word, index) => (
                        <span
                            key={index}
                            className={index === activeBodyIndex ? "highlight" : ""}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </form>
        </section>
    )
}

export default EditNote


function getWordIndex(str, pos) {
    str = String(str);
    pos = Number(pos) >>> 0;

    var left = str.slice(0, pos + 1).search(/\S+$/),
        right = str.slice(pos).search(/\s/);

    if (right < 0) {
        return str.slice(left);
    }
    console.log(str.slice(left, right + pos), left, right + pos);
    return left;
}