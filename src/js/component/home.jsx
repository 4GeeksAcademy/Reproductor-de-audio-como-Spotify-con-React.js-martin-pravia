import React from "react";

//create your first component
const Home = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid text-bg-success p-4">
          <span className="navbar-brand mb-0 h1">Spotify home-made</span>
        </div>
      </nav>
      <div className="text-start">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item list-group-item-action list-group-item-success">
            A list item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-success">
            A list item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-success">
            A list item
          </li>
        </ol>
      </div>
      <footer className="position-fixed bottom-0 w-100 bg-success text-center ">
        <div className="d-flex justify-content-around align-items-center fs-1">
          <i className="bi bi-pause-btn"></i>
          <i className="bi bi-play-btn"></i>
          <i className="bi bi-skip-backward-btn"></i>
          <i className="bi bi-fast-forward-btn"></i>
        </div>
      </footer>
    </>
  );
};

export default Home;
