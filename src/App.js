import { Switch} from 'react-router-dom'
import AppBar from './components/AppBar';
import { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';
import HomeView from './views/HomeView';
import RegisterFormView from './views/RegisterFormView';
import LoginFormView from './views/LoginFormView';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ContactsView from './views/ContactsView';

function App() {
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
        <ContactsView/>
      </PrivateRoute>

      </Switch>
      
    </Container>
  );
}

export default App;
