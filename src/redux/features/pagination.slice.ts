import { createSlice } from "@reduxjs/toolkit";

export interface PaginationState {
  currentPage: number;
  pageSize: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  pageSize: 10
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      // Reset the current page to 1 when the page size changes
      state.currentPage = 1;
    }
  }
});

export const { setCurrentPage, setPageSize } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
