import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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
  <li className="list-group-item list-group-item-action list-group-item-success">A list item</li>
  <li className="list-group-item list-group-item-action list-group-item-success">A list item</li>
  <li className="list-group-item list-group-item-action list-group-item-success">A list item</li>
</ol>
  </div>
  </>
  	);
};

export default Home;
