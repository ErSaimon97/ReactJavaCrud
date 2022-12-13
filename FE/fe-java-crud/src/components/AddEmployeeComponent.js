// import React, { useState,useEffect } from "react"
// import {Link, useHistory, useParams } from 'react-router-dom';
// import EmployeeService from "../services/EmployeeService";



// const AddEmployeeComponent = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lasttName, setLastName] = useState('');
//     const [emailId, setEmailId] = useState('');
//     const history = useHistory();
//     const [id] = useParams();

//     const saveOrUpdateEmployee = (e) => {
//         e.preventDefault();
//         const employee = {firstName,lasttName,emailId};
        
//         if(id) {
//             EmployeeService.updateEmployee(id,employee).then((response) => {

//             })
//         }
//     }
// }

