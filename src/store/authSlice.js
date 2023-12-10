import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userDate = action.payload.userDate;
        },
        logout: (state, action) => {
            state.status = false;
            state.userDate = null;
        },
    }
})

export const {login, logout} = authSlice.actions;


export default authSlice.reducer;