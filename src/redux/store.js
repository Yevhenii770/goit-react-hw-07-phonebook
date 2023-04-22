import { configureStore } from '@reduxjs/toolkit';
import contactsReducer, { userFilter, userModal } from './userSlice';

export const store = configureStore({
  reducer: {
    filter: userFilter.reducer,
    data: contactsReducer,
    modal: userModal.reducer,
  },
});
