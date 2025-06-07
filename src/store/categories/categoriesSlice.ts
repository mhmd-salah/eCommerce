import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";

interface ICategoriesState {
  records: { id: number; title: string; prefix: string; img: string }[];
  loading: "idle" | "pending" | "success" | "failed";
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
        state.records = action.payload.data;
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
