import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import './App.css';

function App() {

  const [employees, setEmployees] = useState([]);

  const mapRow = (row, fields) => (
    Object.fromEntries(
      row.map((value, idx) => [
        fields[idx].id,
        value,
      ])
    )
  );

  const onSuccess = (response) => {
    setEmployees(
      response.data.map(row => mapRow(row, response.fields))
    );
  };

  const onError = (error) => {
    // Implement me with better error handling
    console.log(error);
  };

  useEffect(() => {
    // TODO: Replace query params with UX filters
    fetch('http://localhost:3001/api/employees' + window.location.search)
      .then(res => res.json())
      .then(onSuccess, onError);
  }, []);

  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      <div className="Cards">
      {employees.map(employee =>
        <EmployeeCard key={employee.id} employee={employee}/>
      )}
      </div>
    </div>
  );

}

export default App;
