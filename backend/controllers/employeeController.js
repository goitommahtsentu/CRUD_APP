import Employee from "../models/employeeDB.js";
import asyncHandler from 'express-async-handler'
import * as mongoose from "mongoose";


const getEmployee=asyncHandler(async (req,res)=>{
    try {
        const getEmployees=await Employee.find()
        res.status(200).json(getEmployees)
    }
    catch (error) {
           res.status(404).json({message:error.message})
    }
})
const createEmployee=asyncHandler(async (req,res)=>{
   const post=req.body
    const newPost=new Employee(post)
    try {
        await newPost.save()
        res.status(200).json(newPost)
    }catch (error) {
          res.status(409).json({message:error.message})
    }

})

const updateEmployee=async (req,res)=> {
    // const {id: _id} = req.params;
    // const post = req.body;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //     return res.status(404).send('not post with that id')
    // const updatedEmployee = await Employee.findByIdAndUpdate(_id,
    //     {...post, _id}, {new: true})
    // res.json(updatedEmployee)

    const editEmp=req.body;
    try {
        const employee=await Employee.findOne({_id:editEmp._id})
        employee.name=editEmp.name,
            employee.dateOfBirth=editEmp.dateOfBirth,
            employee.gender=editEmp.gender,
            employee.salary=editEmp.salary

        await employee.save()
        res.send('employee detail edited or updated')
    }catch (e) {
        return res.status(400).json({message:e})
    }

}

    const getEmployeeById=async (req,res)=>{
        const empId=req.body;
        try {
            const employee=await  Employee.findOne({_id:empId})
            res.send(employee)
        }catch (e) {
            return res.status(200).json({message:e})

        }

}


const deleteEmployee=async (req,res)=> {
  // const empId=req.body;
  // try {
  //     await Employee.findOneAndDelete(({_id:empId}))
  //     res.send('employee deleted successfully')
  // }catch (e) {
  //     return res.status(400).json({message:e})
  // }


//     const {id} = req.params;
//     const post = req.body;
//
//     try {
//
//         if (!mongoose.Types.ObjectId.isValid(post._id))
//             return res.status(404).send('not post with that id')
//         await Employee.findByIdAndRemove(id)
//
//     } catch (error) {
//         return res.status(400).json({message: error})
//     }
// }


    const employee= await Employee.findById(req.params.id)
    if (employee){
        await employee.remove()
        res.json({message:'Employee removed'})
    }
    else {
        res.status(404)
        throw new Error('employee not found')
    }
}

export {getEmployee,createEmployee,updateEmployee,deleteEmployee,getEmployeeById}