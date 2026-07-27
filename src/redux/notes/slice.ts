import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitialNotesStateType, NoteType } from "../../types/types";
import { addNote, deleteNote, getNotes, updateNote } from "./operations";

const initialNotesState: InitialNotesStateType = {
  items: [],
  loading: false,
  error: null,
  theme: "light",
};
const handlePending = (state: InitialNotesStateType) => {
  state.loading = true;
};
const handleRejected = (
  state: InitialNotesStateType,
  action: PayloadAction<unknown>,
) => {
  state.loading = false;
  state.error = action.payload as string;
};
const slice = createSlice({
  name: "notes",
  initialState: initialNotesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, handlePending)
      .addCase(
        getNotes.fulfilled,
        (state, action: PayloadAction<NoteType[]>) => {
          state.items = action.payload;
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(getNotes.rejected, handleRejected)
      .addCase(addNote.pending, handlePending)
      .addCase(addNote.fulfilled, (state, action: PayloadAction<NoteType>) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addNote.rejected, handleRejected)
      .addCase(deleteNote.pending, handlePending)
      .addCase(deleteNote.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteNote.rejected, handleRejected)
      .addCase(updateNote.pending, handlePending)
      .addCase(
        updateNote.fulfilled,
        (state, action: PayloadAction<NoteType>) => {
          const index = state.items.findIndex(
            (item) => item.id === action.payload.id,
          );
          if (index !== -1) {
            state.items[index] = action.payload;
          }
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(updateNote.rejected, handleRejected);
  },
});
export const notesReducer = slice.reducer;
