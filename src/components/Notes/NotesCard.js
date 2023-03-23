import React from 'react';
import './NotesCard.css';
import { FiEdit2 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'
import parser from 'html-react-parser';

function NotesCard({ title, body, date, color, onDeleteNote, onEditNote }) {
  return (
    <div style={{ backgroundColor: color }} className="notes-card">
      <div className="notes-card-header">
        <h3 className="notes-card-title">{title}</h3>
        <div className="notes-card-actions">
          <button onClick={onEditNote} className="notes-card-action edit-action">
            <FiEdit2 />
          </button>
          <button onClick={onDeleteNote} className="notes-card-action delete-action">
            <MdOutlineDelete />
          </button>
        </div>
      </div>
      <p className="notes-card-content">{parser(body)}</p>
      <p className="notes-card-date">{date}</p>
    </div>
  );
}

export default NotesCard;
