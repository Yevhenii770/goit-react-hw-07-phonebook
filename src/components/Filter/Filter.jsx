import { Input } from '../ContactForm/ContactForm.styled';
import { Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterQuery } from 'redux/userSlice';
import * as contactSelectors from 'redux/contactsSelectors';

const Filter = () => {
  const value = useSelector(contactSelectors.getFilterValue);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterQuery(e.currentTarget.value));
  };

  return (
    <Label>
      <span style={{ paddingBottom: '4px' }}>Find contacts by name</span>
      <Input type="text" value={value} onChange={changeFilter} />
    </Label>
  );
};
export default Filter;
