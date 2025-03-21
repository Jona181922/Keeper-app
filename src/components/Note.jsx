import React, { useState } from "react";

function Note({ id, title, content, color, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title, content, color });

  function isDarkColor(hexColor) {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance < 128; 
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSave() {
    onEdit(id, editedNote);
    setIsEditing(false);
  }

  return (
    <div
      className={`note ${isDarkColor(color) ? "dark" : ""}`}
      style={{ backgroundColor: color, color: isDarkColor(color) ? "#fff" : "#000" }}
    >
      {isEditing ? (
        <>
          <input
            name="title"
            value={editedNote.title}
            onChange={handleChange}
            style={{ backgroundColor: color, color: isDarkColor(color) ? "#fff" : "#000" }}
          />
          <textarea
            name="content"
            value={editedNote.content}
            onChange={handleChange}
            style={{ backgroundColor: color, color: isDarkColor(color) ? "#fff" : "#000" }}
          />
          <div className="actions">
            <input
              type="color"
              name="color"
              value={editedNote.color}
              onChange={handleChange}
            />
            <button onClick={handleSave}>Guardar</button>
          </div>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="actions" style={{ display: "flex", gap: "10px" }}>
            <button onClick={handleEditClick}>Editar</button>
            <button onClick={() => onDelete(id)}>Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
