import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title">
      <button type="button" onClick={props.sort} className="btn btn-danger">Sort(Ascending/Descending)</button>
      <h1 className="title">{props.children}</h1>
      <form className="form-group">
        <input type="text" className="form-control-lg" placeholder="Search Employee(first name)" onChange={props.handleChange} />
      </form>


    </div>
  );
}

export default Title;