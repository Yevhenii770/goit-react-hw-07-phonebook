import { configureStore } from '@reduxjs/toolkit';
import { userFilter, userModal } from './userSlice';

import contactsReducer from './contactsReducer';

export const store = configureStore({
  reducer: {
    filter: userFilter.reducer,
    data: contactsReducer,
    modal: userModal.reducer,
  },
});
