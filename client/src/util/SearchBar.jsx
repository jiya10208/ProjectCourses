import { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useCourses } from "../store/CoursesContext";

export default function SearchBar() {
  const { loadFilteredCourses, courses } = useCourses();
  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(e) {
    setSearchInput(e.target.value);
    if (e.target.value.length > 1) {
      e.preventDefault();
      const searchTerm = e.target.value.toLowerCase();

      const filteredCourses = courses.filter((el) => {
        const lowerCaseName = el.name.toLowerCase();
        const lowerCaseInstructor = el.instructor?.toLowerCase(); // Handle optional instructor
        const lowerCaseDescription = el.description?.toLowerCase(); // Handle optional description

        // Use includes() for case-insensitive search within strings
        return (
          lowerCaseName.includes(searchTerm) ||
          (lowerCaseInstructor && lowerCaseInstructor.includes(searchTerm)) ||
          (lowerCaseDescription && lowerCaseDescription.includes(searchTerm))
        );
      });

      loadFilteredCourses(filteredCourses, searchTerm.length);
    } else {
      loadFilteredCourses([], 0);
    }
  }

  return (
    <>
      {" "}
      <input
        type="text"
        id="search-input"
        className={styles.search_input}
        tabIndex="0"
        placeholder="Search Just the Class"
        aria-label="Search Just the Class"
        autoComplete="off"
        value={searchInput}
        onChange={handleSubmit}
      />
      <button className={styles.searchButton} onClick={handleSubmit}>
        <FaSearch />
      </button>
    </>
  );
}
