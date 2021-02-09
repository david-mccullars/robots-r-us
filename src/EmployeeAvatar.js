import React from 'react';
import './App.css';
import * as defaultAvatar from './defaultAvatar.png'

function EmployeeAvatar({ src }) {

  return <img className="Avatar" src={src || defaultAvatar}/>;

};

export default EmployeeAvatar;
