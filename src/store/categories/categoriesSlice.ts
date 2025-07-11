import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import type { TCategory, TLoading } from "@customTypes";

interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
        state.records = [];
      })
      .addCase(actGetCategories.fulfilled, (state, action) => {
        state.loading = "success";
        state.records = action.payload;
        state.error = null;
      })
      .addCase(actGetCategories.rejected, (state, action) => {
        state.loading = "failed";
        state.records = [];
        if (action.payload && typeof action.payload == "string") {
          state.error = action.payload;
        }
      });
  },
});

export { actGetCategories };
export default categoriesSlice.reducer;
