import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    createEmployeeReducer,
    deleteEmployeeReducer,
    employeeEditReducer, employeeListReducer, getEmployeeByIdReducer
} from "./reducer/employeeReducer";



const reducer = combineReducers({
    employeeListReducer:employeeListReducer,
    createEmployeeReducer:createEmployeeReducer,
    deleteEmployeeReducer:deleteEmployeeReducer,
    employeeEditReducer:employeeEditReducer,
    getEmployeeByIdReducer:getEmployeeByIdReducer
})



const initialState = {

}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
