import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import { Header } from './AppBar.styled';
import {authSelectors} from '../../redux/auth'
import { useSelector } from "react-redux";
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() { 
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <Header>
      <Navigation />
    {isLoggedIn ? <UserMenu/> : <AuthNav/> }     
    </Header>
  );
}