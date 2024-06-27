/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function StudentCourseItem({ el }) {
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
          <em> {el.progress * 100}%</em>
        </strong>
      </span>
      <div className={styles.progressBarWidth}>
        <div
          className={styles.progressBar}
          style={{
            width: `${el.progress * 100}%`,
            background: "green",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
