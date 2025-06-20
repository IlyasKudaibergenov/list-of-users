import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
};

export const bucketSlice = createSlice({
    name: "bucket",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload);
            state.users = [...state.users, action.payload];
        },
        deleteUser: (state, action) => {
            console.log(action);
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    }
});

export const { addUser, deleteUser } = bucketSlice.actions;
export default bucketSlice.reducer;