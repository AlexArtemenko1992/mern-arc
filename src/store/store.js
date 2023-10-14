import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../reducers/loginReducer";
import portalReducer from "../reducers/portalReducer";

const store = configureStore({
  reducer: { loginReducer, portalReducer },
});

export default store;
