import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiAddNote,
  apiDeleteNote,
  apiGetNotes,
  apiUpdateNote,
} from "../../services/notes-api";
import type { NoteType, RequestNoteType } from "../../types/types";

export const addNote = createAsyncThunk<NoteType, RequestNoteType>(
  "notes/addNote",
  async (data, thunkAPI) => {
    try {
      const response = await apiAddNote(data);
      console.log(response);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
export const getNotes = createAsyncThunk<NoteType[]>(
  "notes/getNotes",
  async (_, thunkAPI) => {
    try {
      const response = await apiGetNotes();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
export const deleteNote = createAsyncThunk<string, string>(
  "notes/deleteNote",
  async (id, thunkAPI) => {
    try {
      await apiDeleteNote(id);
      return id;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
export const updateNote = createAsyncThunk<NoteType, NoteType>(
  "notes/updateNote",
  async (data, thunkAPI) => {
    try {
      const response = await apiUpdateNote(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
