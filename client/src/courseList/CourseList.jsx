import Navbar from "../util/Navbar";
import SpinnerFullPage from "../util/SpinnerFullPage";
import { useCourses } from "../store/CoursesContext";
import CourseItem from "./CourseItem";
import styles from "./CourseList.module.css";

export default function CourseList() {
  const { courses, isLoading, filteredCourse } = useCourses();
  if (isLoading) return <SpinnerFullPage />;
  if (!isLoading && (!courses || courses.length === 0))
    return (
      <div>
        <Navbar title={"Error"} />
        <p>Problem to load the data</p>
      </div>
    );
  return (
    <div>
      <Navbar title="Course Listing page" />

      <div className={styles.listContent}>
        {filteredCourse && filteredCourse.length >= 1
          ? filteredCourse.map((el) => <CourseItem key={el.id} {...el} />)
          : courses.map((el) => <CourseItem key={el.id} {...el} />)}
      </div>
    </div>
  );
}
