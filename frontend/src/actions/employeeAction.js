import {
    CREATE_EMPLOYEE_FAIL,
    CREATE_EMPLOYEE_REQUEST,
    CREATE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAIL,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    LIST_EMPLOYEE_FAIL,
    LIST_EMPLOYEE_REQUEST,
    LIST_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAIL, UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS
} from "../constants/constants";
import axios from "axios";

export const employeeListAction=()=>async (dispatch)=>{
    try {
        dispatch({
            type:LIST_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.get('/api/employee')
        dispatch({
            type:LIST_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:LIST_EMPLOYEE_FAIL,
            payload:error
        })
    }
}
export const getEmployeeByIdAction=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type:UPDATE_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.post(`/api/employee/getId/`,{id})
        dispatch({
            type:UPDATE_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:UPDATE_EMPLOYEE_FAIL,
            payload:error
        })
    }
}

export const createEmployeeAction=(employee)=>async (dispatch)=>{
    try {
        dispatch({
            type:CREATE_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.post('/api/employee/add',employee)
        dispatch({
            type:CREATE_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:CREATE_EMPLOYEE_FAIL,
            payload:error
        })
    }
}
export const editEmployeeAction=(updateEmp)=>async (dispatch)=>{
    try {
        dispatch({
            type:UPDATE_EMPLOYEE_REQUEST,
        })
        const {data}=await axios.post('/api/employee/edit',updateEmp)
        dispatch({
            type:UPDATE_EMPLOYEE_SUCCESS,
            payload:data
        })
    }catch (error) {
        dispatch({
            type:UPDATE_EMPLOYEE_FAIL,
            payload:error
        })
    }
}
export const deleteEmployeeAction=(id)=>async dispatch=>{
    try {

        const {response}=await axios.delete(`/api/employee/delete/${id}`)
        alert('deleted successfully')

        console.log(response)
        window.location.reload()

    }catch (error) {

        alert("something went wrong")
        console.error(error)

    }
}

