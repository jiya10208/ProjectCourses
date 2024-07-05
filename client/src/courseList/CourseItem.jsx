import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";

import styles from "./CourseItem.module.css";
export default function CourseItem({
  name,
  instructor,
  duration,
  thumbnail,
  id,
  location,
  enrollmentStatus,
}) {
  return (
    <Link to={`${id}`} className={styles.CourseItem}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.aboutCourse}>
        <p>
          <strong> {name}</strong>
        </p>
        <p>
          <small>{instructor}</small>
        </p>
        <p>
          {duration}
          <RxDot />
          <strong>{location}</strong>
          <RxDot />
          <span className={`${enrollmentStatus}`}>{enrollmentStatus}</span>
        </p>
      </div>
    </Link>
  );
}
