export const fetchContacts = () => async dispatch => {
  dispatch('booksActions.fetchBookRequest(books)');

  try {
    dispatch('booksActions.fetchBookSuccess(books)');
  } catch {
    dispatch('booksActions.fetchBookError(books)');
  }
};
