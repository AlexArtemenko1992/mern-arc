import { createReducer } from "@reduxjs/toolkit";

const initialState = { isLogged: false };

const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LOGIN", (state) => {
      state.isLogged = true;
    })
    .addCase("LOGOUT", (state) => {
      state.isLogged = false;
    })
    .addDefaultCase(() => {});
});

export default loginReducer;
