import React from "react";
import Student from './Components/Student.jsx'
import Teacher from "./Components/Teacher.jsx";
import "./App.css";

function App() {
  return (
    <>
    <div className="container">
    <Student/>
    <Teacher/>
    </div>
    </>
  );
}

export default App;