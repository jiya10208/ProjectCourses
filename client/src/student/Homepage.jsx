import Navbar from "../util/Navbar";
import StudentCourseList from "./StudentCourseList";
import styles from "./Homepage.module.css";
import StudentDetails from "./StudentDetails";
import { useContext } from "react";
import StudentContext from "../store/StudentContext";
import SpinnerFullPage from "../util/SpinnerFullPage";
export default function Homepage() {
  const { currStudent, isLoading, isAthenticated } = useContext(StudentContext);
  if (!isAthenticated) return <>Login Now</>;
  return (
    <>
      {isLoading ? (
        <SpinnerFullPage />
      ) : (
        <>
          <Navbar title={currStudent.name} />
          <div className={styles.main_studentContent}>
            <StudentDetails currStudent={currStudent} />
            <p className={styles.enrolledCourses}>Enrolled courses:</p>
            <StudentCourseList currentCourses={currStudent.enrolled_courses} />
          </div>
        </>
      )}
    </>
  );
}
