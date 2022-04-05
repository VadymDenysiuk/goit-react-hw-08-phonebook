import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => (
  <nav>
    <NavLink  className={styles.link} activeClassName = {styles.activeLink} to='/login'>Login</NavLink>
    <NavLink  className={styles.link} activeClassName = {styles.activeLink} to='/register'>Sign up</NavLink>

  </nav>
) 

export default AuthNav;
