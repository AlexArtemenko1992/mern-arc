import { createReducer } from "@reduxjs/toolkit";

const initialState = { isShowPortal: false };

const portalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("SHOW_PORTAL", (state) => {
      state.isShowPortal = true;
    })
    .addCase("HIDE_PORTAL", (state) => {
      state.isShowPortal = false;
    })
    .addDefaultCase(() => {});
});

export default portalReducer;
