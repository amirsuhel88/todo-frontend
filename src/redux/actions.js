import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get("http://localhost:3000/api/todos");
  return response.data;
});
