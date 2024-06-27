import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import StudentContext from "../store/StudentContext";
import SearchBar from "./SearchBar";

// eslint-disable-next-line react/prop-types
export default function Navbar({ title }) {
  const { pathname } = useLocation();

  const { isAthenticated } = useContext(StudentContext);
  return (
    <>
      <div className={`${styles.navbar_title} ${title}`}>{title}</div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/course">Courses</NavLink>
          </li>
          <li>{pathname === "/course" ? <SearchBar /> : ""}</li>
        </ul>
        <div className={styles.navbar_search}>
          {!isAthenticated ? (
            <button className={styles.button}>Login Now</button>
          ) : (
            <NavLink to="/profile">Profile</NavLink>
          )}
        </div>
      </nav>
    </>
  );
}
