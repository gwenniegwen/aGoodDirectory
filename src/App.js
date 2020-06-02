import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Form from "./components/Form"
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
    filteredEmps: [],
    sortOrder: 1
  };

  componentDidMount() {
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


      this.setState({ employees: employees, filteredEmps: employees })
      // console.log(this.state.employees)


    });


  }


  //Sort Information//

  sortEmployees = (e) => {

    console.log("sort employee")


    const sort = (a, b) => {
      if (a.first < b.first) { return -this.state.sortOrder }
      if (a.first > b.first) { return this.state.sortOrder }
      return 0;

    }
    this.setState({
      filteredEmps: this.state.filteredEmps.sort(sort),
      sortOrder: -this.state.sortOrder
    })

  }

  handleChange = e => {
    const userInput = e.target.value
    console.log(userInput)
    const filter = (arr, val) => {
      return arr.filter(emp => emp.first.includes(val))
    }

    this.setState({ filteredEmps: filter(this.state.employees, userInput) })
  }



  // remove employees//
  removeEmployee = id => {

    const employees = this.state.employees.filter(employees => employees.id !== id);
 console.log (employees)
 
    this.setState({ employees });
  };



  //render information 
  render() {
    
    return (
      <Wrapper>
        <Title sort={this.sortEmployees} handleChange={this.handleChange}>Employee Directory</Title>
        {/* <Form /> */}
        {this.state.filteredEmps.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
           
            


            key={employee.id}
            first={employee.first}
            last={employee.last}
            gender={employee.gender}
            image={employee.picture}
            id={employee.id}
            email={employee.email}
            age={employee.age}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

