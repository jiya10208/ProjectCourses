import styles from "./SyllabusList.module.css";

export default function SyllabusList({ el }) {
  function handleMarkComplete() {}
  return (
    <li className={`${styles.CompleteSyllabusListItem} ${el.status}`}>
      <p>{el.topic}</p>
      <p>
        <em>-{el.content}</em>
      </p>

      <div>
        <p>Mark as Complete</p>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={el.status === "Complete"}
            onClick={() => handleMarkComplete()}
          />
          <span className={styles.round_Slider}></span>
        </label>
      </div>
    </li>
  );
}
