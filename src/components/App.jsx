import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import { Button } from '../components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '.././redux/userSlice';

export default function App() {
  const modal = useSelector(state => state.modal.showModal);
  const dispatch = useDispatch();

  const togleModal = () => {
    dispatch(showModal(!modal));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Button
        type="button"
        style={{
          marginTop: '10px',
        }}
        onClick={togleModal}
      >
        Contacts
      </Button>
      {modal && (
        <Modal onClick={togleModal}>
          <h2
            style={{
              textAlign: 'center',
              paddingBottom: '30px',
            }}
          >
            Contacts
          </h2>
          <Filter />
          <ContactList />
          <Button type="button" onClick={togleModal}>
            Close
          </Button>
        </Modal>
      )}
    </div>
  );
}
