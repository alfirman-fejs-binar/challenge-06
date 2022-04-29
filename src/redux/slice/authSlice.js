import { createSlice } from "@reduxjs/toolkit";
import { defaultUsers } from "./utils";

const initialState = {
  users: defaultUsers,
  userData: {},
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      const user = defaultUsers.find((el) => el.email === email);

      if (!user) return alert("email is unregistered");

      if (password !== user.password) return alert("password don't match");

      state.isLogin = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.userData = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
