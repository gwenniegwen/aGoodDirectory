import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title">
  <button type="button" onClick= {props.sort}className="btn btn-primary">Sort(Last Name)</button>
  <h1 className="title">{props.children}</h1>
  {/* filter component goes here once built */}
  </div>
  );
}

export default Title;