import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../components/Api/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const responce = await contactsApi.fetchContacts();
    return responce;
  } catch (error) {
    alert(error.message);
  }
});

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contacsId, thunkAPI) => {
    try {
      await contactsApi.deleteContact(contacsId);
      return contacsId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await contactsApi.addContact(newContact);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
