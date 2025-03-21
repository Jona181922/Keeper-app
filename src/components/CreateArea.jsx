import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "#ffffff",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title || note.content) {
      onAdd(note);
      setNote({ title: "", content: "", color: "#ffffff" });
    }
  }

  return (
    <div className="create-area">
      <form style={{ backgroundColor: note.color }}>
        <input
          name="title"
          placeholder="Título"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Escribe una nota..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <div className="actions">
          <input
            type="color"
            name="color"
            value={note.color}
            onChange={handleChange}
          />
          <button onClick={submitNote}>Agregar</button>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;