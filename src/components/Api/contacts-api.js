import axios from 'axios';

axios.defaults.baseURL = 'https://643d747d6afd66da6af76dac.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  console.log(data);
  return data;
}

export async function deleteContacts(id) {
  const responce = await axios.delete(`/contacts/${id}`);
  console.log(responce);
}
