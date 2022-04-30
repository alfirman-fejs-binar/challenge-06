import { createSlice } from "@reduxjs/toolkit";
import validateEmail from "../../utils/validateEmail";
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

export const signIn = (data, alert) => (dispatch) => {
  if (!data.email) return alert("email required");

  if (!data.password) return alert("password required");

  if (!validateEmail(data.email)) return alert("invalid email");

  const user = defaultUsers.find((el) => el.email === data.email);

  if (!user) return alert("email is unregistered");

  if (data.password !== user.password) return alert("password don't match");

  const { password, ...userData } = user;

  dispatch(login(userData));
};
