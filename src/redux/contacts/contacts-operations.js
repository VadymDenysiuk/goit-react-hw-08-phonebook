import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
    
  } catch (error) {
    console.log('rerr');
    dispatch(fetchContactsError(error.message));
  }
};


const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
 
  dispatch(addContactRequest());
  
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = ContactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${ContactId}`)
    .then(() => dispatch(deleteContactSuccess(ContactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};
const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;