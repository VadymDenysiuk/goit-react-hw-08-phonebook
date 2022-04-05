import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink  exact className={styles.link} activeClassName = {styles.activeLink} to='/'>Home</NavLink>
    <NavLink  className={styles.link} activeClassName = {styles.activeLink} to='/contacts'>Contacts</NavLink>
 
  </nav>
) 

export default Navigation;
