import { useSelector } from "react-redux";
import { selectNotes } from "../../redux/notes/selectors";

const NotesList = () => {
  const notes = useSelector(selectNotes);
  return (
    <ul>
      {notes.map((note) => {
        return <li>{note.title}</li>;
      })}
    </ul>
  );
};

export default NotesList;
