import React from "react";

function PostInternship() {
  return (
    <div>
      <h2>Post a New Internship</h2>
      <form>
        <label>Title:</label>
        <input type="text" placeholder="Internship Title" />
        <label>Description:</label>
        <textarea placeholder="Internship Description"></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostInternship;
