import styles from "./CourseEnroll.module.css";
export default function CourseInput({ label, id, ...props }) {
  return (
    <p className={styles.inputDiv}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
