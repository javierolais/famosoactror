// import { createStore, combineReducers } from 'redux';
// import { authReducer } from '../reducers/authReducer';

// export const store = combineReducers({
//     auth: authReducer
// });

import { configureStore } from "@reduxjs/toolkit";
//reducers;
import users from './slices/actor';
export default configureStore({
    reducer: {
        users
    }
});
