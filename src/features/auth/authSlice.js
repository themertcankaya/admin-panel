import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => {
  const storedUser = localStorage.getItem("admin-user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const initialState = {
  user: getInitialUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { name: action.payload };
      localStorage.setItem("admin-user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("admin-user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
