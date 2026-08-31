import { useSelector } from "react-redux";
import { selectFiltredNotes, selectNotes } from "../../redux/notes/selectors";
import NoteCard from "../NoteCard/NoteCard";

const NotesList = () => {
  const notes = useSelector(selectFiltredNotes);
  return (
    <ul>
      {notes.length > 0 ? (
        notes.map((note) => {
          return (
            <li key={note.id}>
              <NoteCard note={note} />
            </li>
          );
        })
      ) : (
        <p>no notes yet</p>
      )}
    </ul>
  );
};

export default NotesList;
