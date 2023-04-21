import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchBooksRequest');
export const fetchContactsSuccess = createAction('contacts/fetchBooksSuccess');
export const fetchContactsError = createAction('contacts/fetchBooksError');
