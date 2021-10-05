import React, {useEffect, useState} from 'react';
import {Button, Form,} from "react-bootstrap";
import FormContainer from "./FormContainer";
import {useDispatch, useSelector} from "react-redux";

import {employeeEditReducer} from "../reducer/employeeReducer";
import {editEmployeeAction, getEmployeeByIdAction} from "../actions/employeeAction";

function EditEmployee({match,history}) {

    const [name,setName]=useState('')
    const [dateOfBirth,setDateOfBirth]=useState('')
    const [gender,setGender]=useState('')
    const [salary,setSalary]=useState('')


    const getEmployeeByIdReducer=useSelector(state => state.getEmployeeByIdReducer)
    const {employee}=getEmployeeByIdReducer

     const employeeEditReducer=useSelector(state => state.employeeEditReducer)
     const {errorEdit,editEmp}=employeeEditReducer
    const dispatch = useDispatch()
    useEffect(() => {

        if (employee){
            if (employee._id===match.params.id){

                setName(employee.name)
                setDateOfBirth(employee.dateOfBirth)
                setGender(employee.gender)
                setSalary(employee.salary)
            }
            else {
                dispatch(getEmployeeByIdAction(match.params.id))
            }

        }
        else {
            dispatch(getEmployeeByIdAction(match.params.id))
        }

    }, [dispatch,employee])
    const submitHandler = (e) => {
        e.preventDefault()
        const updatedEmployee={
            _id:match.params.id,
            name:name,
            dateOfBirth:dateOfBirth,
            gender:gender,
            salary:salary
        }
        console.log(updatedEmployee)

        alert('Employee data is successfully added')
        dispatch(editEmployeeAction(updatedEmployee))
        history.push('/')
    }


    return (
         <div>

             <FormContainer>
                 <h3>Edit Employer</h3>

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
                     <input type="text" className='form-control'
                            placeholder='Enter Salary'
                            value={salary}
                            onChange={(e)=>{setSalary(e.target.value)}}
                     />
                     <Button type='submit'>Edit</Button>
                 </Form>
             </FormContainer>
         </div>

    );
}


export default EditEmployee;

