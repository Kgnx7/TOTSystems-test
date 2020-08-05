import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/login/loginSlice'
import throttle from 'lodash/throttle'
import { loadState, saveState } from '../utils/localStorage'

const persistedState = loadState()
const store = configureStore({
    reducer: {
        auth: authReducer,
    },

    preloadedState: persistedState,
})

store.subscribe(
    throttle(() => {
        saveState(store.getState())
    }, 1000)
)

export default store
