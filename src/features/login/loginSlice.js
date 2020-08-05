import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isAuthenticated: false,
    },
    reducers: {
        logIn: (state, { payload }) => {
            state.user = payload
            state.isAuthenticated = true
        },
        logOut: (state) => {
            state.user = {}
            state.isAuthenticated = false
        },
    },
})

export const { logIn, logOut } = counterSlice.actions

export const userLogin = (user, history) => (dispatch) => {
    dispatch(logIn(user))
    history.push('/')
}

export const userLogout = (history) => (dispatch) => {
    dispatch(logOut())
    history.push('/login')
}

export default counterSlice.reducer
