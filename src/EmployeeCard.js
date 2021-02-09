import React from 'react';
import EmployeeAvatar from './EmployeeAvatar';
import FollowButton from './FollowButton';
import './App.css';

function EmployeeCard({ employee }) {

  const { id, avatar, first_name, last_name, title, email } = employee;

  return (
    <div className="Card">
      <EmployeeAvatar src={avatar}/>
      <h2>{first_name} {last_name}</h2>
      <FollowButton employeeID={id}/>
      <h3>{title}</h3>
      <h4>{email}</h4>
    </div>
  );

};

export default EmployeeCard;
