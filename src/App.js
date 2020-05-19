import React, {Component} from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";

class App extends Component{
    state = {
        employees:[]
    };

    componentDidMount(){
      API.getUsers().then(response => {
        const employees = response.data.results.map(emp => {

          const empOBJ = {
            gender: emp.gender,
            first: emp.name.first,
            last: emp.name.last,
            email: emp.email,
            id: emp.id.value,
            age: emp.dob.age,
            picture: emp.picture.medium,
          }
          return empOBJ
        });
        this.setState({employees})
        console.log(this.state.employees)
      })
    }
    removeEmployee = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const employees = this.state.employees.filter(employee => employee.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ employees });
      };
    
      sortEmployees =(e) =>{
        console.log("sort employee")
      } 
      render() {
        return (
          <Wrapper>
            <Title sort={this.sortEmployees}>Employee List</Title>
            {this.state.employees.map(employee => (
              <EmployeeCard
                removeEmployee={this.removeEmployee}
                id={employee.id}
                key={employee.id}
                first={employee.first}
                last={employee.last}
                gender={employee.gender}
                image={employee.picture}
                email={employee.email}
                age={employee.age}
              />
            ))}
          </Wrapper>
        );
      }
    }
    
    export default App;
     
