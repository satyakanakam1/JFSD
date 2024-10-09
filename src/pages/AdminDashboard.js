import React from "react";
import PostInternship from "../components/Admin/PostInternship";
import TrackProgress from "../components/Admin/TrackProgress";
import Evaluation from "../components/Admin/Evaluation";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <PostInternship />
      <TrackProgress />
      <Evaluation />
    </div>
  );
}

export default AdminDashboard;
