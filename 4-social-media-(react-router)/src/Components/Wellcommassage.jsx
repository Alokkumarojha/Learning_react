import React from "react";

function Wellcommassage({ onGetPostClick }) {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        No post availables
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          “This post collection is currently empty. 🌟 Why not add your own
          story? Share an adventure, a thought, or a snippet of your day. The
          blank canvas awaits!” 🖋️📝
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
      </div>
    </div>
  );
}

export default Wellcommassage;
