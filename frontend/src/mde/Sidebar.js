const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  taskOrGroup
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>{taskOrGroup=="task"?"Zadania":"Przedmiot"}</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, lastModified }) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{notes.title}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("pl-PL", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;