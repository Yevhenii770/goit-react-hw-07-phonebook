import { UlOfContact, ContactItem, Button } from './ContactList.styled';
import { deleteContacts, getDataArray } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const arrayContacts = useSelector(getDataArray);
  console.log(arrayContacts);

  const filterValue = useSelector(state => state.filter.filterValue);

  const filterNormilized = filterValue.toLowerCase().trim();
  const visibleContacts = arrayContacts.filter(contact =>
    contact.name?.toLowerCase().includes(filterNormilized)
  );

  return (
    <UlOfContact>
      {visibleContacts.map(({ id, number, name }) => (
        <ContactItem key={id}>
          {name}: {number}
          <Button onClick={() => dispatch(deleteContacts(id))} type="button">
            Delete
          </Button>
        </ContactItem>
      ))}
    </UlOfContact>
  );
};

export default ContactList;
