import styles from "./Navbar.module.scss";
import { NavLink , Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {FaBars , FaTimes } from "react-icons/fa";
import {useState} from "react";

const Navbar = ({BurgerColour}) => {
  
  const MenuLink =({url,path}) => {
    return (<li className={styles.navlink}>
      <NavLink to={`${url}`} 
        className={({isActive}) => (isActive ? styles.active : undefined)}>
        {`${path}`}
      </NavLink>
    </li>)
  }

  const [isNavOpen, setIsNavOpen] = useState(false)

  return <div className={styles.navbar_container}>
    <nav>
      {/* LOGO */}
      <div className={styles.brand_logo}>
        <Link to="/">Real</Link>
      </div>
      {/* NAV-BURGER */}
      <div
        className={styles.mobile_menu}
        style={{color:BurgerColour}}
        onclick={() => setIsNavOpen(!isNavOpen)}
      >
        <FaBars />
      </div>
      {/* NAV */}
      <ul className={`${isNavOpen ? styles.ul_active : undefined} ${styles.navbar_ul }`}>
        <div
          className={styles.mobile_close}
          onclick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaTimes />
        </div>
        
        {/* LI - MENULINK */}
        <MenuLink url="" path="Home" />
        <MenuLink url="" path="Buy" />
        <MenuLink url="" path="Rent" />
        <MenuLink url="" path="Search" />
        <MenuLink url="" path="About" />
        <Link to="/auth" className={styles.login}>
          <span>Login</span>
        </Link>
      </ul>

      {/* LOGIN */}
      <Link to="/auth" classname={styles.login_container}>
        <span style={{color:BurgerColour}}>Login</span>
        <BsArrowRight style={{color:BurgerColour}} />
      </Link>
    </nav>
  </div>;
};

export default Navbar;