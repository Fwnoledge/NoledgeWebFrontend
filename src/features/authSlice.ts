'use client'
import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: AuthSlice = {
    isAuthenticated: false,
    username: "",
    token: "",
}

export const authSlice = createSlice({
    name: 'auth-slice',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthSlicePayload>) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.token = "";
        }
    },
})

export const {login, logout} = authSlice.actions


export default authSlice.reducer
