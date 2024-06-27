import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import { useEffect } from "react";
import { useCourses } from "../store/CoursesContext";
import CourseContent from "./CourseContent";
import { useNavigate } from "react-router-dom";
import styles from "./Course.module.css";

export default function Course() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { loadSelectedCourse, currentCourse } = useCourses();
  useEffect(() => {
    loadSelectedCourse(id);
  }, [id, loadSelectedCourse]);

  function handleEnroll() {
    navigate("enroll");
  }

  return (
    <div>
      <Navbar title={currentCourse.name} />

      <div className={styles.enrollButtonDiv}>
        <p>Do not miss out,</p>
        <button onClick={handleEnroll} className={styles.enrollButton}>
          Enroll Now
        </button>
      </div>
      <CourseContent currentCourse={currentCourse} />
    </div>
  );
}
