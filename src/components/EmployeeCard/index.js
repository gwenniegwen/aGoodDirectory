import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card">
        <div className="img-container">
          <img alt={props.first} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>                   
              <strong>Name:</strong> {props.first} {props.last}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>ID:</strong> {props.id}
            </li>
            <li>
              <strong> Age:</strong> {props.age}
                <strong>  &nbsp; &nbsp; Gender:</strong> {props.gender}
            </li>
          </ul>
        </div> 
        <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}
    
export default EmployeeCard;
