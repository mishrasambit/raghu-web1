import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import loginReducer from "./features/login/loginSlice";
//import authReducer from './login/LoginReducer';
import rootReducer from './rootReducer'

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);