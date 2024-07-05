import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./student/Homepage";
import CourseList from "./courseList/CourseList";
import Course from "./course/Course";
import { StudentContextProvider } from "./store/StudentContext";
import CurrStatus_Syllabus from "./courseSyllabus.jsx/CurrStatus_Syllabus";
import PageNotFound from "./PageNotFound";
import CourseEnroll from "./courseList/CourseEnroll";
import { Suspense } from "react";
import SpinnerFullPage from "./util/SpinnerFullPage";
import Home from "./home/Home";

function App() {
  return (
    <StudentContextProvider>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Homepage />} />
            <Route
              path="/profile/syllabus/:id"
              element={<CurrStatus_Syllabus />}
            />
            <Route path="/course" element={<CourseList />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/course/:id/enroll" element={<CourseEnroll />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/" /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;
