import React, {useEffect, useState} from 'react';
import {Button, Form,} from "react-bootstrap";
import FormContainer from "./FormContainer";
import {useDispatch, useSelector} from "react-redux";
import {createEmployeeAction} from "../actions/employeeAction";
import {Link} from "react-router-dom";



function AddEmployee() {
    const [name,setName]=useState('')
    const [dateOfBirth,setDateOfBirth]=useState('')
    const [gender,setGender]=useState('')
    const [salary,setSalary]=useState('')


    const dispatch=useDispatch()
    const createEmployeeReducer=useSelector(state => state.createEmployeeReducer)
    const {success,loading,error}=createEmployeeReducer

    const submitHandler = (e) => {
        e.preventDefault()
        const addNewEmp={
            name:name,
            dateOfBirth:dateOfBirth,
            gender:gender,salary:salary
        }
        console.log(addNewEmp)
        dispatch(createEmployeeAction(addNewEmp))
        alert('Employee data is successfully added')
    }

    return (
        <FormContainer>
            <h3>Add New Employer</h3>
            {error}
            <Form onSubmit={submitHandler} className='justify-content-center my-lg-5 py-3'>
                <input type="text" className='form-control'
                       placeholder='Enter Name'
                       value={name}
                       onChange={(e)=>{setName(e.target.value)}}
                />
                <input type="date" className='form-control'
                       placeholder='Date Of Birth'
                       value={dateOfBirth}
                       onChange={(e)=>{setDateOfBirth(e.target.value)}}
                />
                <input type="text" className='form-control'
                       placeholder='Enter Gender'
                       value={gender}
                       onChange={(e)=>{setGender(e.target.value)}}
                />
                {/*<select className='form-control'>*/}
                {/*    <option>Select gender</option>*/}
                {/*    <option value={gender}>Male</option>*/}
                {/*    <option value={gender}>Female</option>*/}
                {/*</select>*/}
                <input type="text" className='form-control'
                       placeholder='Enter Salary'
                       value={salary}
                       onChange={(e)=>{setSalary(e.target.value)}}
                />
                <Button type='submit'> Add new</Button>
            </Form>
            <Link to='/'>Back To List</Link>
        </FormContainer>
    );
}

export default AddEmployee;