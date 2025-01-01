import { createSlice } from "@reduxjs/toolkit";

export interface ICategoriesState {
  records: { id: number; name: string; img: string }[];
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
});

export default categoriesSlice.reducer;