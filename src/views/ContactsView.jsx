import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../redux/auth';
import {contactsOperations, contactsSelectors } from '../redux/contacts';


export default function ContactsView() { 


  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]) 

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
 
  const data = useSelector(contactsSelectors.getAllContacts)

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts =
    data && data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));

  return (
    <>
    <ContactForm contacts={data} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <p>Number of contacts: {data && data.length}</p>
      {data && data.length ? (
        <ContactList contacts={visibleContacts} />
      ) : (
        <p>Phonebook is empty. You can add contacts.</p>
      )}
    </>)
};







