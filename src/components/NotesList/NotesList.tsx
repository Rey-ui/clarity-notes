import { useSelector } from "react-redux";
import { selectNotes } from "../../redux/notes/selectors";
import NoteCard from "../NoteCard/NoteCard";

const NotesList = () => {
  const notes = useSelector(selectNotes);
  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <NoteCard note={note} />
          </li>
        );
      })}
    </ul>
  );
};

export default NotesList;
