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

// const filterPersistConfig = {
//     key: 'filter',
//     storage,
//     whitelist: ['filter']
// };
// const persistFilterReducer = persistReducer(filterPersistConfig, filterReducer);


const rootReducer = combineReducers({
    users: persistUsersReducer,
    filter: filterReducer,
})

export default rootReducer;