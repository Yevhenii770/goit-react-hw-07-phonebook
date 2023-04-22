import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contactsOperations';

export const userFilter = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState: {
    filterValue: '',
  },
  // Объект редюсеров
  reducers: {
    filterQuery(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const userModal = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
  },
  reducers: {
    showModal(state, action) {
      state.showModal = action.payload;
    },
  },
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts = store.contacts.filter(contact => contact.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

// Генераторы экшенов и редюсеров
export const { filterQuery } = userFilter.actions;
export const { showModal } = userModal.actions;
export default contactsSlice.reducer;
