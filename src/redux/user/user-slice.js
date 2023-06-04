import {createSlice} from "@reduxjs/toolkit";
import { fetchUsers, fetchUsersById, changeFollowerCount } from "./user-operations";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        error: null,
        currentUser: null,
        subscribedUsers: [],
    },
    reducers: {
        toggleUserSubscription: (state, action) => {
        const isUserSubscribed = state.subscribedUsers.includes(action.payload);        
        if (isUserSubscribed) {
            return {
            ...state,
            subscribedUsers: state.subscribedUsers.filter((id) => id !== action.payload),
            };
        } else {
            return {
            ...state,
            subscribedUsers: [...state.subscribedUsers, action.payload],
            };
        }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        builder.addCase(fetchUsersById.pending, (state) => {
        state.isLoading = true;
        })
        builder.addCase(fetchUsersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentUser = action.payload;
        })
        builder.addCase(fetchUsersById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
            })
        builder.addCase(changeFollowerCount.pending, (state) => {
        state.isLoading = true;
        })
        builder.addCase(changeFollowerCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users.push(action.payload);
        state.currentUser = action.payload;
        })
        builder.addCase(changeFollowerCount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        builder.addDefaultCase((state) => {
        return
        })
    },
});

export const { toggleUserSubscription } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;