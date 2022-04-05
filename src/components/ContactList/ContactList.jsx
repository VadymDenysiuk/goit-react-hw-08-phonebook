import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactList.styled';
import Spinner from '../Spinner/Spinner';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {contactsOperations} from '../../redux/contacts'

function ContactList({ contacts, isFetching }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])
  
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <List>
          {contacts && contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
        </List>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  isFetching: PropTypes.bool,
};

export default ContactList;
