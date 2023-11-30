require('dotenv').config()
const express=require('express')
const app=express()
const PORT=3500

const mongoose =require('mongoose')
const cors=require('cors')
const PatientRouter=require('./routes/PatientRoute')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error', (errorMessage)=> console.log(errorMessage))
db.once('open', ()=> console.log('Connected successfully to the database...'))







app.use('/api/v1/hospital',PatientRouter)

app.listen(PORT,console.log(`server run at http://localhost:${PORT}/api/v1/hospital`))