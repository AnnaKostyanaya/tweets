import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersReducer } from "./user/user-slice";
import { filterReducer } from "./filter/filter-slice";


const usersPersistConfig = {
    key: 'users',
    storage,
    whitelist: [ 'subscribedUsers' ]
};
const persistUsersReducer = persistReducer(usersPersistConfig, usersReducer);

const rootReducer = combineReducers({
    users: persistUsersReducer,
    filter: filterReducer,
})

export default rootReducer;