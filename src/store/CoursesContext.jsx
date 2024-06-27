/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const CoursesContext = createContext();
const loadCoursesUrl = "http://localhost:3000/courses";

const initialCoursesStates = {
  courses: [],
  filteredCourse: [],
  isLoading: false,
  currentCourse: {},
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "courses/loaded":
      return {
        ...state,
        isLoading: false,
        courses: action.payload,
      };
    case "course/loaded":
      return {
        ...state,
        isLoading: false,
        currentCourse: action.payload,
      };
    case "filteredCourse/loaded":
      return {
        ...state,
        isLoading: false,
        filteredCourse: action.payload,
      };
    default:
      return state;
  }
}
function CoursesContextProvider({ children }) {
  const [{ courses, isLoading, currentCourse, filteredCourse }, dispatch] =
    useReducer(reducer, initialCoursesStates);

  useEffect(function () {
    async function fetchCoursesList() {
      dispatch({ type: "loading" });
      try {
        const resp = await fetch(`${loadCoursesUrl}`);
        const data = await resp.json();
        dispatch({ type: "courses/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There is some error in loading the data... ",
        });
      }
    }
    fetchCoursesList();
  }, []);

  const loadSelectedCourse = useCallback(
    async function loadSelectedCourse(id) {
      if (id === currentCourse.id) return;
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${loadCoursesUrl}/${id}`);
        const data = await res.json();
        dispatch({ type: "course/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There is some error in loading the data... ",
        });
      }
    },
    [currentCourse.id]
  );
  function loadFilteredCourses(data, length) {
    if (length > 3) {
      dispatch({ type: "filteredCourse/loaded", payload: data });
    }
    dispatch({ type: "filteredCourse/loaded", payload: data });
  }
  return (
    <CoursesContext.Provider
      value={{
        courses,
        loadSelectedCourse,
        currentCourse,
        filteredCourse,
        isLoading,
        loadFilteredCourses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

function useCourses() {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error("Courses context is used outside the courseProvider");
  }
  return context;
}

export { CoursesContextProvider, useCourses };
