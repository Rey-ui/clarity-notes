import { useSelector } from "react-redux";
import { selectNotes } from "../../redux/notes/selectors";

const NotesStatistics = () => {
  const notes = useSelector(selectNotes);
  const activeNotes = notes.filter(({ done }) => !done).length;
  const finished = notes.filter(({ done }) => done).length;
  return (
    <div>
      <div>
        <span>Active: </span>
        <span>{activeNotes}</span>
      </div>
      <div>
        <span>Finished: </span>
        <span>{finished}</span>
      </div>
      <div>
        <span>All: </span>
        <span>{notes.length}</span>
      </div>
    </div>
  );
};

export default NotesStatistics;
