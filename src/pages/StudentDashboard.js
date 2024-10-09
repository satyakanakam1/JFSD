import React from "react";
import ApplyInternship from "../components/Student/ApplyInternship";
import TaskTracker from "../components/Student/TaskTracker";
import Feedback from "../components/Student/Feedback";

function StudentDashboard() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <ApplyInternship />
      <TaskTracker />
      <Feedback />
    </div>
  );
}

export default StudentDashboard;
