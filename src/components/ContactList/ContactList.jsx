import { UlOfContact, ContactItem, Button } from './ContactList.styled';
// import { deleteContacts } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { contactsSelectors, contactsOperations } from '../../redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const arrayContacts = useSelector(contactsSelectors.getDataArray);
  const filterValue = useSelector(contactsSelectors.getFilterValue);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterNormilized = filterValue.toLowerCase().trim();
  const visibleContacts = arrayContacts.filter(contact =>
    contact.name?.toLowerCase().includes(filterNormilized)
  );

  return (
    <UlOfContact>
      {visibleContacts.map(({ id, number, name }) => (
        <ContactItem key={id}>
          {name}: {number}
          <Button onClick={() => {}} type="button">
            Delete
          </Button>
        </ContactItem>
      ))}
    </UlOfContact>
  );
};

export default ContactList;
// dispatch(deleteContacts(id));
