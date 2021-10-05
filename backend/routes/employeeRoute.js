import express from 'express'
import {createEmployee,
        getEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployeeById} from "../controllers/employeeController.js";
const router=express.Router()



router.get('/',getEmployee)
router.post('/add',createEmployee)
router.post('/getId',getEmployeeById)
router.post('/edit',updateEmployee)
router.delete(`/delete/:id`,deleteEmployee)




export default router