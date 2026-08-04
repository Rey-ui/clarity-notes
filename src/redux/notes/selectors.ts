import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import {
  selectFilterByPriority,
  selectFilterByStatus,
} from "../filters/selectors";

export const selectNotes = (state: RootState) => state.notes.items;
export const selectLoading = (state: RootState) => state.notes.loading;
export const selectError = (state: RootState) => state.notes.error;
export const selectFiltredNotes = createSelector(
  [selectNotes, selectFilterByStatus, selectFilterByPriority],
  (notes, status, priority) => {
    return notes
      .filter((note) => {
        if (status === "done") return note.done;
        if (status === "active") return !note.done;
        return true;
      })
      .filter((note) => {
        if (!note.priority || priority === "all") return true;
        return note.priority === priority;
      });
  },
);
