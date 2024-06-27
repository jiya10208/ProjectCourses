import { GiTeacher } from "react-icons/gi";
import styles from "./Course.module.css";
import CourseSyllabus from "./CourseSyllabus";

export default function CourseContent({ currentCourse }) {
  return (
    <div className={styles.main_course_content}>
      <h1>{currentCourse.name}</h1>
      <div className={styles.main_course_p}>
        <p>
          <span className={styles.main_course_description}>
            Description-{"  "}
          </span>
          {currentCourse.description}
        </p>
        <p>
          <span className={styles.main_course_description}>
            location{"  -"}
          </span>{" "}
          {currentCourse.location}
          {" ,  "}
          <span className={styles.main_course_description}>
            Enrollment Status-
          </span>{" "}
          <span className={`${currentCourse.enrollmentStatus}`}>
            {currentCourse.enrollmentStatus}
          </span>
        </p>
      </div>
      <div className={styles.main_course_Instructor}>
        <div>
          <GiTeacher size={"7rem"} />
        </div>
        <div>
          <p>
            <span className={styles.main_course_description}>Instructor-</span>{" "}
            <strong>{currentCourse.instructor}</strong>
          </p>
          <p>
            {" "}
            <span className={styles.main_course_description}>
              email Id{"  -"}
            </span>{" "}
            instructor@gmail.com
          </p>
          <p>
            {" "}
            <span className={styles.main_course_description}>
              Schedule-
            </span>{" "}
            {currentCourse.schedule}, {currentCourse.duration}
          </p>
        </div>
      </div>

      <CourseSyllabus {...currentCourse} />
    </div>
  );
}
