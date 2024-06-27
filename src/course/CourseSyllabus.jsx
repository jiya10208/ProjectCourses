import { GrSchedules } from "react-icons/gr";
import styles from "./Course.module.css";

export default function CourseSyllabus({ syllabus, prerequisites }) {
  return (
    <div className={styles.syllabusContent}>
      <div className={styles.centerSyllabusIcon}>
        <GrSchedules size={"5rem"} />
      </div>
      <h2>Syllabus and pre-requisite</h2>
      <div className={styles.syllabus_preReq}>
        <div>
          <p>
            <strong>
              {!prerequisites
                ? "no pre-requisites required"
                : "Pre requisites: "}
            </strong>
          </p>

          <ul>
            {prerequisites &&
              prerequisites.map((prerequisite) => (
                <li key={prerequisite}>{prerequisite}</li>
              ))}
          </ul>
        </div>
        <div className="syllabus">
          <p>{!syllabus ? "Syllabus will be updated soon" : "Syllabus: "}</p>

          <ul>
            {syllabus &&
              syllabus.map((week) => (
                <li key={week.week}>
                  <h4>
                    Week {week.week}: {week.topic}
                  </h4>
                  <p>{week.content}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
