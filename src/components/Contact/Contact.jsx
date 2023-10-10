import { useDispatch } from 'react-redux';
import { ContactsItem, DeleteButton } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactsItem>
      <li>
        {contact.name}: {contact.number}
      </li>
      <DeleteButton onClick={handleDelete} type="button">
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};

export default Contact;
