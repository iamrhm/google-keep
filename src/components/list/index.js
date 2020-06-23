import React from "react";

const List = ({ note, openNoteModal = () => {} }) => {
  return (
    <div onClick={() => openNoteModal(note.id)}>
      <p>{note.title}</p>
      <p>{note.content}</p>
    </div>
  );
};

export default List;
