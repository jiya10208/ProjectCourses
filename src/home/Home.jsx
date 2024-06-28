import Navbar from "../util/Navbar";
import styles from "./Home.module.css";
import img1 from "../assets/image.png";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  function handleEnroll() {
    navigate("course");
  }

  return (
    <div className={styles.parentContainer}>
      {" "}
      <div className={styles.circle}></div>
      <div className={`${styles.circle} ${styles.leftCircle}`}></div>
      <Navbar title={"Homepage"} />
      <div className={styles.homepage}>
        <div className={styles.homepage_headingdiv}>
          <span className={styles.homepage_page1_heading}>CourseX</span>
          <span className={styles.homepage_page1_p}>
            where the learning begins
          </span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            cum esse ipsa! Velit libero eligendi incidunt explicabo odio
            molestiae deleniti et sed. Culpa, beatae dolorum.
          </p>
          <button className={styles.exploreNowbtn} onClick={handleEnroll}>
            Explore the courses{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
