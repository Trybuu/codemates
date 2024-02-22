import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  userName: '',
  loggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.userName = 'Marek'
      state.loggedIn = true
    },
  },
})

export const { login } = authSlice.actions
export default authSlice.reducer
