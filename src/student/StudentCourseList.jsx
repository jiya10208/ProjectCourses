/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import StudentCourseItem from "./StudentCourseItem";

export default function StudentCourseList({ currentCourses }) {
  if (!currentCourses || currentCourses.length === 0) {
    return (
      <div className={styles.Student_CourseList}>
        <h1>Nothing to show here !</h1>
        <Link to="/course" className={styles.main_studentContent_Link}>
          Courses
        </Link>
      </div>
    );
  }
  return (
    <div>
      {currentCourses.map((el) => (
        <StudentCourseItem key={el.id} el={el} />
      ))}
    </div>
  );
}
