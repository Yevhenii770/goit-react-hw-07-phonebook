import { createSlice } from '@reduxjs/toolkit';

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

// const userData = createSlice({
//   name: 'data',
//   initialState: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//   },
//   reducers: {
//     addData(state, { payload }) {
//       state.items.push(payload);
//     },
//     deleteContacts(state, { payload }) {
//       state.items = state.items.filter(el => el.id !== payload);
//     },
//   },
// });

// Генераторы экшенов и редюсеров
export const { filterQuery } = userFilter.actions;
export const { showModal } = userModal.actions;
// export const { deleteContacts, addData } = userData.actions;

/////
// SELECTORS
////
