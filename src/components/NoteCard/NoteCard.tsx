import clsx from "clsx";
import { useAppDispatch } from "../../hooks.ts";
import { deleteNote, updateNote } from "../../redux/notes/operations.ts";
import type { NoteType } from "../../types/types.ts";

interface NoteCardProps {
  note: NoteType;
}

const NoteCard = ({ note }: NoteCardProps) => {
  const dispatch = useAppDispatch();
  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  const handleDoneNote = (note: NoteType): void => {
    dispatch(
      updateNote({
        ...note,
        done: !note.done,
      }),
    );
  };
  return (
    <div className={clsx(note.done && css.activeStats, css.statsBtn)}>
      {note.title}
      <button
        type="button"
        onClick={() => {
          handleDoneNote(note);
        }}
      >
        Done
      </button>
      <div>{note.done ? <div>O</div> : <div>X</div>}</div>
      <button
        type="button"
        onClick={() => {
          handleDeleteNote(note.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default NoteCard;
