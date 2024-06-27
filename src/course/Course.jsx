import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import { useEffect } from "react";
import { useCourses } from "../store/CoursesContext";
import CourseContent from "./CourseContent";

export default function Course() {
  const { id } = useParams();
  const { loadSelectedCourse, currentCourse } = useCourses();
  useEffect(() => {
    loadSelectedCourse(id);
  }, [id, loadSelectedCourse]);

  return (
    <div>
      <Navbar title={currentCourse.name} />
      <CourseContent currentCourse={currentCourse} />
    </div>
  );
}
