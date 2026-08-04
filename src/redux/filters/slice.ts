import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitialFiltersStateType } from "../../types/types";

const initialFiltersState: InitialFiltersStateType = {
  byStatus: "all",
  byPriority: "all",
};

const slice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    filterByStatus(state, action: PayloadAction<"all" | "active" | "done">) {
      state.byStatus = action.payload;
    },
    filterByPriority(
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">,
    ) {
      state.byPriority = action.payload;
    },
  },
});
export const { filterByStatus, filterByPriority } = slice.actions;
export const filtersReducer = slice.reducer;
