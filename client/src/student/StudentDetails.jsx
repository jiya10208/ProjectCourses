/* eslint-disable react/prop-types */
import styles from "./Homepage.module.css";

export default function StudentDetails({ currStudent }) {
  return (
    <>
      <fieldset>
        <legend>Student&apos;s detail</legend>
        <p className={styles.StudentDetails_Faint}>
          name:{" "}
          <span className={styles.StudentDetails_dark}>{currStudent.name}</span>
        </p>
        <p className={styles.StudentDetails_Faint}>
          Email:{" "}
          <span className={styles.StudentDetails_dark}>
            {currStudent.email}
          </span>
        </p>
        <p className={styles.StudentDetails_Faint}>
          User Id:{" "}
          <span className={styles.StudentDetails_dark}>
            {currStudent.userId}
          </span>
        </p>
        <p className={styles.StudentDetails_Faint}>
          Currently enrolled in:{" "}
          <span className={styles.StudentDetails_dark}>
            {currStudent.enrolled_courses
              ? `${currStudent.enrolled_courses.length}  ${
                  currStudent.enrolled_courses.length === 1
                    ? "Course"
                    : " Courses"
                }`
              : "none"}
          </span>
        </p>
      </fieldset>
    </>
  );
}
