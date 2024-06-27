import { useContext } from "react";
import { useCourses } from "../store/CoursesContext";
import StudentContext from "../store/StudentContext";
import CourseInput from "./CourseInput";
import Navbar from "../util/Navbar";

export default function CourseEnroll() {
  const { currStudent } = useContext(StudentContext);
  const { currentCourse } = useCourses();
  //   const {student}=
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const EnrollmenrData = Object.fromEntries(fd.entries()); // { email: test@example.com }
    console.log(EnrollmenrData);

    // const d = JSON.stringify({
    //   order: {
    //     items: items,
    //     customer: customerData,
    //   },
    // });
  }

  return (
    <div>
      <Navbar title={currentCourse.name} />
      <div>
        <fieldset>
          <legend>Course Details</legend>

          <p>
            Course: <em>{currentCourse.name} </em>, by{" "}
            {currentCourse.instructor}
          </p>
          <p>duration: {currentCourse.duration}.</p>
          <p>schedule: {currentCourse.schedule}. </p>
        </fieldset>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Student Details</legend>
          <CourseInput
            label="Full Name"
            type="text"
            id="name"
            defaultValue={currStudent.name}
          />
          <CourseInput
            label="E-Mail Address"
            type="email"
            id="email"
            defaultValue={currStudent.email}
          />{" "}
          <CourseInput
            label="userId"
            type="text"
            id="userId"
            defaultValue={currStudent.userId}
          />{" "}
          <p>Course Details</p>
          <button type="enroll"> Make transaction</button>
        </fieldset>
      </form>
    </div>
  );
}
