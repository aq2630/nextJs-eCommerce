import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

if (typeof window !== "undefined") {
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  reducers: {
    userLogin: async () => {
      const data = await (await fetch("/api/login")).json();
      return [...state, data];
    },
    userInfoFromStorage: async () => {
      if (typeof window !== "undefined") {
        const data = localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null;
      }
      return [...state, data];
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { userLogin, userInfoFromStorage } = userSlice.actions;

export default userSlice.reducer;
