import { useEffect } from "react";
import NoteForm from "../../components/NoteForm/NoteForm";
import NotesList from "../../components/NotesList/NotesList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { getNotes } from "../../redux/notes/operations";

const NotesPage = () => {
  //  const notes = useSelector(selectNotes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  return (
    <div>
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default NotesPage;
