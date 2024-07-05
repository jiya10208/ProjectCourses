import styles from "./PageNotFound.module.css";
import Navbar from "./util/Navbar";
export default function PageNotFound() {
  return (
    <div>
      <Navbar title={"page not found"} />
      <h1 className={styles.h1_pagenotfound}>Page Not Found</h1>
    </div>
  );
}
