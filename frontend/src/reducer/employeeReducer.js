import {
    LIST_EMPLOYEE_REQUEST,
    LIST_EMPLOYEE_SUCCESS,
    LIST_EMPLOYEE_FAIL,
    CREATE_EMPLOYEE_REQUEST,
    CREATE_EMPLOYEE_SUCCESS,
    CREATE_EMPLOYEE_FAIL,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAIL,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAIL, GET_EMPLOYEE_BYID_REQUEST, GET_EMPLOYEE_BYID_SUCCESS, GET_EMPLOYEE_BYID_FAIL,
} from "../constants/constants";



export const employeeListReducer = (state={employees:[]}, action) => {
    switch (action.type) {
        case LIST_EMPLOYEE_REQUEST:
            return {loading: true, employees: []}

        case LIST_EMPLOYEE_SUCCESS:
            return {loading: false, employees: action.payload};

        case LIST_EMPLOYEE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
};
export const getEmployeeByIdReducer = (state={}, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_BYID_REQUEST:
            return {loading: true,
                ...state
            }

        case GET_EMPLOYEE_BYID_SUCCESS:
            return {loading: false, employees: action.payload};

        case GET_EMPLOYEE_BYID_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
};


export const employeeEditReducer = (state={}, action) => {
    switch (action.type) {
        case UPDATE_EMPLOYEE_REQUEST:
            return {loading: true,
            ...state}

        case UPDATE_EMPLOYEE_SUCCESS:
            return {loading: false, employee: action.payload};

        case UPDATE_EMPLOYEE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
};



  export const createEmployeeReducer = (state={}, action) => {
    switch (action.type) {
        case CREATE_EMPLOYEE_REQUEST:
            return {loading: true,}

        case CREATE_EMPLOYEE_SUCCESS:
            return {
                loading: false,
                success:true,
                employee: action.payload
            };

        case CREATE_EMPLOYEE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
};

export const deleteEmployeeReducer = (state=[], action) => {
    switch (action.type) {
        case DELETE_EMPLOYEE_REQUEST:
            return {loading: true,}

        case DELETE_EMPLOYEE_SUCCESS:
            return state.filter((state)=>state._id!==action.payload)

        case DELETE_EMPLOYEE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
};

