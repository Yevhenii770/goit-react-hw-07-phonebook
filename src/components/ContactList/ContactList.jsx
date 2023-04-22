import { UlOfContact, ContactItem, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { contactsSelectors, contactsOperations } from '../../redux';

const ContactList = () => {
  const arrayContacts = useSelector(contactsSelectors.getDataArray);
  const filterValue = useSelector(contactsSelectors.getFilterValue);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getSelectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterNormilized = filterValue.toLowerCase().trim();
  const visibleContacts = arrayContacts.filter(contact =>
    contact.name?.toLowerCase().includes(filterNormilized)
  );

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <UlOfContact>
        {visibleContacts.map(({ id, phone, name }) => (
          <ContactItem key={id}>
            {name}:
            <br />
            {phone}
            <Button
              onClick={() => dispatch(contactsOperations.removeContact(id))}
              type="button"
            >
              Delete
            </Button>
          </ContactItem>
        ))}
      </UlOfContact>
    </>
  );
};

export default ContactList;
