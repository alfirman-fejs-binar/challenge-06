import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createSlice } from "@reduxjs/toolkit";
import validateEmail from "../../utils/validateEmail";
import { defaultUsers } from "./utils";
import { auth } from "../../firebase";

const initialState = {
  users: defaultUsers,
  userData: {},
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
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

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;

export const signUp = (users, data, alert, cb) => (dispatch) => {
  const { email, password } = data;

  if (!email) return alert("email required");

  if (!password) return alert("password required");

  if (!validateEmail(email)) return alert("invalid email");

  const user = users.find((el) => el.email === data.email);

  if (user) return alert("email is already used");

  dispatch(register(data));

  cb()
};

export const signIn = (users, data, alert) => (dispatch) => {
  if (!data.email) return alert("email required");

  if (!data.password) return alert("password required");

  if (!validateEmail(data.email)) return alert("invalid email");

  const user = users.find((el) => el.email === data.email);

  if (!user) return alert("email is unregistered");

  if (data.password !== user.password) return alert("password don't match");

  const { password, ...userData } = user;

  dispatch(login(userData));
};

export const signInWithGoole = () => (dispatch) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      const userData = {
        email: user.email,
        name: user.displayName,
      };
      dispatch(login(userData));
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
      console.log("email", email);
      console.log("credential", credential);
    });
};
