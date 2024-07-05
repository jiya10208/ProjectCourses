import { useContext } from "react";
import styles from "./SyllabusList.module.css";
import StudentContext from "../store/StudentContext";
import { useParams } from "react-router-dom";
import SpinnerFullPage from "../util/SpinnerFullPage";

export default function SyllabusList({ el }) {
  const { currStudent, postStudent, isLoading } = useContext(StudentContext);
  const { id } = useParams();
  const CourseIndex = currStudent.enrolled_courses.findIndex(
    (curr) => curr.id === id
  );
  const requiredCourse = currStudent.enrolled_courses.find(
    (el) => el.id === id
  );

  function handleMarkComplete() {
    if (requiredCourse && requiredCourse.syllabus) {
      const currSyllabusIndex = requiredCourse.syllabus.findIndex(
        (curr) => curr.topic === el.topic
      );

      if (currSyllabusIndex !== -1) {
        requiredCourse.syllabus[currSyllabusIndex].status =
          el.status === `Complete` ? "InComplete" : "Complete";
        const updatedStudent = currStudent;
        updatedStudent[CourseIndex] = requiredCourse;
        postStudent(updatedStudent);
      } else {
        console.log("did not reach here");
      }
    } else {
      console.error(
        "Enrolled course or syllabus not found for",
        currStudent.name
      );
    }
  }
  if (isLoading) return <SpinnerFullPage />;

  return (
    <li className={`${styles.CompleteSyllabusListItem} ${el.status}`}>
      <p>{el.topic}</p>
      <p>
        <em>-{el.content}</em>
      </p>

      <button
        className={styles.syllabuStatusbutton}
        onClick={handleMarkComplete}
      >
        Mark as {el.status === "Complete" ? "Incomplete" : "complete"}
      </button>
    </li>
  );
}
