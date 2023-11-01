// import {configureStore} from '@reduxjs/toolkit';
// import credReducer from '../features/cred/credSlice';
// import storage from "redux-persist/lib/storage";
// import {persistReducer} from "redux-persist";
// import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage
// };

// const reducer = combineReducers({
//     cred: credReducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//     // reducer: credReducer
//     reducer: persistedReducer
// }); 

import {configureStore} from '@reduxjs/toolkit';
import credReducer from '../features/cred/credSlice';


export const store = configureStore({
    // reducer: credReducer
    reducer: {
        cred: credReducer,
    },
}); 
