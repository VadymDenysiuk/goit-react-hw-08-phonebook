import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';
import { useDeleteContactMutation } from '../../redux/contacts/contact-slice';
import { useDispatch } from 'react-redux';
import { Text, Button, Item } from './ContactItem.styled';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  // const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const deleteContact = id => dispatch(contactsOperations.deleteContact(id))
  return (
    <Item>
      <div>
        <Text>{contact.name}</Text>
        <Text>{contact.number}</Text>
      </div>
      <Button onClick={() => deleteContact(contact.id)}>
        {/* {isLoading ? 'Deleting...' : 'Delete'} */}delete
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactItem;
