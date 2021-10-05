import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, Navbar, Row, Table,} from "react-bootstrap";
import FormContainer from "./FormContainer";
import {useDispatch, useSelector} from "react-redux";
import {deleteEmployeeAction, employeeListAction} from "../actions/employeeAction";
import {Link} from "react-router-dom";

function ListEmployee() {
    const dispatch = useDispatch()
    const employeeListReducer = useSelector(state => state.employeeListReducer)
    const {loading, error, employees} = employeeListReducer

    const deleteEmployeeReducer = useSelector(state => state.deleteEmployeeReducer)
    const {success} = deleteEmployeeReducer

    useEffect(() => {
        dispatch(employeeListAction())
    }, [dispatch,])


    // const deleteEmployeeHandler=(id)=>{
    //     console.log('delete')
    //  dispatch(deleteEmployeeAction(id))
    // }

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Navbar.Brand>Employee</Navbar.Brand>
        <FormContainer>
            <Row>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>full Name</th>
                        <th>Date Of Birth</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
                    </thead>

                    {employees.map(employee => (
                        <tbody>
                        <tr>
                            <td></td>
                            <td>{employee.name}</td>
                            <td>{employee.dateOfBirth}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.salary} birr</td>
                            <td>
                                <Link to={`/edit/${employee._id}`} className='btn btn-light my-1'>
                                <i className='fas fa-edit'>Edit</i>
                            </Link></td>
                            <td>
                                <Button className='btn-danger' type='submit'
                                        onClick={()=>dispatch(deleteEmployeeAction(employee._id))} >
                                    <i className='fas fa-delete-left'></i>Delete</Button>
                            </td>

                        </tr>
                        </tbody>
                    ))}
                </Table>
                <Link to='/add' className='btn btn-light my-3'>
                    Add new Employee
                </Link>


            </Row>
        </FormContainer>
            </Navbar>
        </header>
    );
}

export default ListEmployee;