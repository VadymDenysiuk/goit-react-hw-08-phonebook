import { useEffect, useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import { useFetchContactQuery } from './redux/contacts/contact-slice';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import AppBar from './components/AppBar';
import { Toaster } from 'react-hot-toast';
import { Container, Text } from './App.styled';
import HomeView from './views/HomeView';
import RegisterFormView from './views/RegisterFormView';
import LoginFormView from './views/LoginFormView';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from './redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { contactsOperations, contactsSelectors } from './redux/contacts';

function App() {
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
 
  // const { data, isFetching } = useFetchContactQuery();
  const data = useSelector(contactsSelectors.getAllContacts)

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts =
    data && data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));

  return (
    <Container>
      <Toaster />
      <AppBar/>


      <h1>Phonebook</h1>

    <Switch>

      <PublicRoute exact path='/'>
        <HomeView/>
      </PublicRoute>

      <PublicRoute exact path='/login' restricted>
        <LoginFormView/>
      </PublicRoute>
      

      <PublicRoute exact path='/register' restricted>
        <RegisterFormView/>
      </PublicRoute>


      <PrivateRoute path='/contacts'>
      <ContactForm contacts={data} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Text>Number of contacts: {data && data.length}</Text>
      {data && data.length ? (
      <ContactList contacts={visibleContacts} /* isFetching={isFetching} */ />
      ) : (
        <Text>Phonebook is empty. You can add contacts.</Text>
      )}
      </PrivateRoute>
      </Switch>
      
    </Container>
  );
}

export default App;
