import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CoursesContextProvider } from "./store/CoursesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoursesContextProvider>
      <App />
    </CoursesContextProvider>
  </React.StrictMode>
);
