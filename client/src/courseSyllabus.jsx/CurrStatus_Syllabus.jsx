import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StudentContext from "../store/StudentContext";
import styles from "./CurrStatus_Syllabus.module.css";
import SpinnerFullPage from "../util/SpinnerFullPage";
import Navbar from "../util/Navbar";
import SyllabusList from "./SyllabusList";

export default function CurrStatus_Syllabus() {
  const { id } = useParams();
  const { currStudent, isLoading, isAthenticated } = useContext(StudentContext);
  if (
    !currStudent ||
    currStudent.length === 0 ||
    !currStudent.enrolled_courses ||
    currStudent.enrolled_courses.length === 0
  ) {
    return (
      <div className={styles.Student_CourseList}>
        <h1>Nothing to show here !</h1>
        <Link to="/course" className={styles.main_studentContent_Link}>
          Courses
        </Link>
      </div>
    );
  }
  if (isLoading) return <SpinnerFullPage />;
  if (!isAthenticated) return <p>Login Now</p>;
  const requiredCourse = currStudent.enrolled_courses.filter(
    (el) => el.id === id
  );
  const syllabus = requiredCourse[0].syllabus;
  if (!requiredCourse)
    return (
      <div className={styles.Student_CourseList}>
        <h1>wrong id selected !</h1>
        <Link to="/course" className={styles.main_studentContent_Link}>
          Courses
        </Link>
      </div>
    );
  return (
    <div>
      <Navbar title={currStudent.name} />
      <div className={styles.Syllabus_completion_detail}>
        <h1>{requiredCourse[0].name} </h1>
        <ul className={styles.CompleteSyllabusList}>
          <p>Syllabus and Completion Details :</p>
          {syllabus.map((el, i) => (
            <SyllabusList key={i} el={el} />
          ))}
        </ul>
      </div>
    </div>
  );
}
