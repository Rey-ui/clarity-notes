import type { RootState } from "../store";

export const selectFilterByStatus = (state: RootState) =>
  state.filters.byStatus;
export const selectFilterByPriority = (state: RootState) =>
  state.filters.byPriority;
