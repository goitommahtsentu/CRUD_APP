import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import bodyParser from 'body-parser'
import cors from'cors'
import connectDB from "./config/DB.js";
import router from "./routes/employeeRoute.js";
import path from 'path'
const app=express()
dotenv.config()
connectDB()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/api/employee',router)







const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}
const PORT= process.env.port || 6000
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    ))

// app.listen(process.env.PORT || 6000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });