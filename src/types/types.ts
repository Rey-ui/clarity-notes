export interface NoteType {
  id: string;
  created_at: string;
  user_id: string;
  title: string;
  content: string;
  priority: "high" | "medium" | "low";
  done: boolean;
}
export type RequestNoteType = Omit<NoteType, "id" | "created_at" | "user_id">;

export interface InitialNotesStateType {
  items: NoteType[];
  loading: boolean;
  error: null | string;
  theme: "light" | "dark";
}
export interface InitialNotesStateType {
  items: NoteType[];
  loading: boolean;
  error: null | string;
  theme: "light" | "dark";
}

export interface InitialFiltersStateType {
  byStatus: "all" | "active" | "done";
  byPriority: "all" | "high" | "medium" | "low";
}
interface ApiQouteResponce {
  quote: string;
  author: string;
  category: string;
}
