import { createSlice } from '@reduxjs/toolkit';


const token = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const initialState = {
  user: null,
  token: '',
  isAuthenticated: false,
  forgotEmail: '',
  forgotEmailToken: '',
  status: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
     
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    setCredentials: (state, { payload }) => {
      state.user = payload
    },
    logoutUser: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.user = initialState.user;
      state.token = initialState.token;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setForgotEmail: (state, action) => {
      state.forgotEmail = action.payload;
    },
    setForgotEmailToken: (state, action) => {
      state.forgotEmailToken = action.payload;
    }
  }
});

export const {
  loginUser,
  logoutUser,
  setCredentials,
  updateUser,
  setForgotEmail,
  setForgotEmailToken
} = authSlice.actions;

export default authSlice.reducer;
