/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function StudentCourseItem({ el }) {
  console.log(el.syllabus);
  var completedweek = 0;
  for (var i = 0; i < el.syllabus.length; i++) {
    if (el.syllabus[i].status === "Complete") {
      completedweek++;
    }
  }
  const progress = completedweek / el.syllabus.length;
  console.log(completedweek);

  return (
    <div className={styles.StudentCourseItem}>
      <Link to={`syllabus/${el.id}`}>
        <p>
          <strong>{el.name}</strong>
          -by {el.instructor}
        </p>
        <em>{el.description}</em>
        <p>
          {el.schedule} . {el.duration}
        </p>
      </Link>
      <span>
        Current Progress:{" "}
        <strong>
          {" "}
          <em> {progress * 100}%</em>
        </strong>
      </span>
      <div className={styles.progressBarWidth}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progress * 100}%`,
            background: "green",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
