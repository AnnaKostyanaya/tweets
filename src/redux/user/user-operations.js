import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL= "https://6478a339362560649a2e2c2a.mockapi.io/api"

export const fetchUsers = createAsyncThunk(
'users/fetchUsers',
async (_, { rejectWithValue }) => {
try {
    const users = await axios.get('users');
    return users.data;
} catch (error) {
    return rejectWithValue(error.message);
}
},
);

export const fetchUsersById = createAsyncThunk(
    'users/fetchUsersById',
    async (id, { rejectWithValue }) => {
    try {
        const users = await axios.get(`users/${id}`);
        return users.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    },
    );

export const changeFollowerCount = createAsyncThunk(
    "users/changeFollower",
    async (current, thunkAPI) => {
    try {
        console.log(current);
    const response = await axios.put(`users/${current.id}`, current);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    }
    );
