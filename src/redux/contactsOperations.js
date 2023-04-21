import * as contactsApi from '../components/Api/contacts-api';
import * as contactsAction from './contactsActions';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(contactsAction.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsAction.fetchContactsError(error));
  }
};
