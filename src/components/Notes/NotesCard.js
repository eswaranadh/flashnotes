import React, { useRef, useEffect } from 'react';

function NotesCard() {
  const cardRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    cardRef.current.appendChild(barRef.current);
  }, []);

  return (
    <>
      <div id="card" ref={cardRef}></div>
      <div id="bar" ref={barRef}></div>
    </>
  );
}

export default NotesCard;
