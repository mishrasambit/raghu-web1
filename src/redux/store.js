import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./features/login/loginSlice";
import authReducer from './login/LoginReducer';

export const store= configureStore({
    reducer :{
        loginReducer,
        authReducer
    }
});