import axios from 'axios';

axios.defaults.baseURL = 'https://643d747d6afd66da6af76dac.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
