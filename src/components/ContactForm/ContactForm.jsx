import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Input, Form, Button, Label } from './ContactForm.styled';
import { addData, getDataArray } from '../../redux/userSlice';
import { PushNotify, PushNotifyError } from '../Notify/Notify';

function ContactForm() {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(getDataArray);

  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const checkName = contacts.some(elContact =>
      elContact.name?.toLowerCase().includes(newContact.name.toLowerCase())
    );

    if (!checkName) {
      dispatch(addData(newContact));
      PushNotify(newContact.name);
    } else {
      PushNotifyError(newContact.name);
    }
    e.target.reset();
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>

      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>

      <Button type="submit">Add contacts</Button>
    </Form>
  );
}

export default ContactForm;
