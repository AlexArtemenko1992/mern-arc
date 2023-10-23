import { createReducer } from "@reduxjs/toolkit";

const initialState = { isLogged: false, user: null };

const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LOGIN", (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    })
    .addCase("LOGOUT", (state) => {
      state.isLogged = false;
      state.user = null;
    })
    .addDefaultCase(() => {});
});

export default loginReducer;
