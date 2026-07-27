import { instance } from "./api";
import type { NoteType, RequestNoteType } from "../types/types";

export async function apiAddNote(data: RequestNoteType): Promise<NoteType> {
  const response = await instance.post("/rest/v1/notes", data, {
    headers: { Prefer: "return=representation" },
  });
  return response.data[0];
}
export async function apiDeleteNote(noteId: string): Promise<void> {
  await instance.delete(`/rest/v1/notes?id=eq.${noteId}`);
}
export async function apiUpdateNote(data: NoteType): Promise<NoteType> {
  const response = await instance.patch(
    `/rest/v1/notes?id=eq.${data.id}`,
    data,
    {
      headers: { Prefer: "return=representation" },
    },
  );
  return response.data[0];
}
export async function apiGetNotes(): Promise<NoteType[]> {
  const response = await instance.get("/rest/v1/notes");
  return response.data;
}
