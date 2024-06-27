import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./student/Homepage";
import CourseList from "./courseList/CourseList";
import Course from "./course/Course";
import { StudentContextProvider } from "./store/StudentContext";
import CurrStatus_Syllabus from "./courseSyllabus.jsx/CurrStatus_Syllabus";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <StudentContextProvider>
      <BrowserRouter>
        {/* <Suspense fallback={<SpinnerFullPage />}> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Homepage />} />
          <Route
            path="/profile/syllabus/:id"
            element={<CurrStatus_Syllabus />}
          />
          <Route path="/course" element={<CourseList />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/" /> */}
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;
