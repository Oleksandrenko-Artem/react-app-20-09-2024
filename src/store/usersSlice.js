import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from './../api/index';

export const loadUsers = createAsyncThunk('users/loadUsers', async (args, thunkApi) => {
    try {
        const result = await getUsers();
        return result.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(loadUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default userSlice.reducer;