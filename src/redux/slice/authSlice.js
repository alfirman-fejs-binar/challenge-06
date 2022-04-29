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
  const { email, password } = data;

  if (!email) return alert("email required");

  if (!password) return alert("password required");

  if (!validateEmail(email)) return alert("invalid email");

  const user = defaultUsers.find((el) => el.email === email);

  if (!user) return alert("email is unregistered");

  if (password !== user.password) return alert("password don't match");

  dispatch(login(data));
};
