import { useEffect } from "react";
import NoteForm from "../../components/NoteForm/NoteForm";
import NotesList from "../../components/NotesList/NotesList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { getNotes } from "../../redux/notes/operations";
import NotesStatistics from "../../components/NotesStatistics/NotesStatistics";
import { selectError, selectLoading } from "../../redux/notes/selectors";
import NotesFilters from "../../components/NotesFilters/NotesFilters";
import DailyQuote from "../../components/DailyQuote/DailyQuote";
import HelmetComponent from "../../components/HelmetComponent";

const NotesPage = () => {
  //const notes = useSelector(selectNotes);
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);
  return (
    <main>
      <HelmetComponent>Notes page</HelmetComponent>
      <section>
        <NoteForm />
        <NotesStatistics />
        <NotesFilters />
        <DailyQuote />
      </section>
      <section>
        {loader && <p>Loading.......</p>}
        <NotesList />
        {error && <p>{error}</p>}
      </section>
    </main>
  );
};

export default NotesPage;
