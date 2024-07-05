import Navbar from "./Navbar";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <>
      <Navbar />
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    </>
  );
}

export default Spinner;
