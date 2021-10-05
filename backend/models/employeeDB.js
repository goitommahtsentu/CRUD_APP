import mongoose from 'mongoose'

const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type: Date,
        required:true,
    },


    gender:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})
const Employee=mongoose.model('Employee',employeeSchema)

export default Employee