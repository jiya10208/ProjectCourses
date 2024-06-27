/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useReducer } from "react";
const StudentContext = createContext();

const loadStudentsUrl = "http://localhost:3000/students";

const initialStudentsState = {
  isLoading: false,
  currStudent: {},
  isAthenticated: true,
  error: "",
  currStudentId: "101",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "isAuthenticated":
      return {
        ...state,
        isAthenticated: true,
        currStudentId: action.payload,
      };
    case "isNotAuthenticated":
      return {
        ...state,
        isAthenticated: false,
        currStudent: {},
        currStudentId: "",
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "currStudent/loaded":
      return {
        ...state,
        isLoading: false,
        currStudent: { ...action.payload },
      };
    default:
      return state;
  }
}
export function StudentContextProvider({ children }) {
  const [
    { isLoading, currStudent, isAthenticated, error, currStudentId },
    dispatch,
  ] = useReducer(reducer, initialStudentsState);

  //  loading the student details
  useEffect(function () {
    async function fetchStudentDetails() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${loadStudentsUrl}`);
        const data = await res.json();
        dispatch({ type: "students/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There is some error in loading the data... ",
        });
      }
    }
    fetchStudentDetails();
  }, []);

  //
  const getStudent = useCallback(
    async function getStudent() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${loadStudentsUrl}/${currStudentId}`);
        const data = await res.json();

        dispatch({ type: "currStudent/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There is some error in loading the data... ",
        });
      }
    },
    [currStudentId]
  );

  useEffect(() => {
    if (isAthenticated && currStudentId) getStudent();
  }, [currStudentId, isAthenticated]);

  return (
    <StudentContext.Provider
      value={{
        isLoading,
        currStudent,
        isAthenticated,
        error,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentContext;
