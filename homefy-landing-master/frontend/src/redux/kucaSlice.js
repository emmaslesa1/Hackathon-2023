import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    kuca: null,
    token: null
}

export const kucaSlice = createSlice({
    name: 'kuca',
    initialState: initialState,
    reducers: {
        login(state, action) {
            localStorage.clear()
            state.kuca = action.payload.kuca
            state.token = action.payload.token
        },
        signup(state, action) {
            localStorage.clear()
            state.kuca = action.payload.kuca
            state.token = action.payload.token
        },
        logout(state) {
            state.kuca = null
            state.token = null
            localStorage.clear()
        }
        
    }
})

export const { signup, login, logout } = kucaSlice.actions

export default kucaSlice.reducer

