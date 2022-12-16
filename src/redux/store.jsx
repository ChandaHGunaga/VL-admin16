import { configureStore } from '@reduxjs/toolkit'
import EmailSlice from './reducers/EmailSlice'
import LoginSlice from './reducers/LoginSlice'
import profileSlice from './reducers/profileSlice'
import regDetailsSlice from './reducers/regDetailSlice'
import studentlistSlice from './reducers/studentlistSlice'
import superAdminInfo from './reducers/superAdminInfo'

import showProfileSlice from './showProfile'

export const store = configureStore({
  reducer: {
    showProfile: showProfileSlice.reducer,
    Login: LoginSlice.reducer,
    emailSend: EmailSlice.reducer,
    regDetails: regDetailsSlice.reducer,
    superAdmin: superAdminInfo.reducer,
    profile: profileSlice.reducer,
    studentList: studentlistSlice.reducer,
  },
})
