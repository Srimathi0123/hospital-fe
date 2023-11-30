const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
    {
        PatientName: {
            type : String,
            required : true
        },
        PatientBloodGroup : {
            type : String,
            required : true,
            enum : ["A+","A-","B+", "B-", "AB+","AB-","O-", "O+"]
        },
        PatientPhoneNumber : {
            type : Number,
            required : true,
            unique : true,
            index : true
        },
        PatientGender: {
            type:String,
            required:true,
            enum : ["Female", "Male"]
        },
        availability: {
            type:String,
            default:"Available"
        }
    },
    {
        collection : 'hospital'
    }
)

module.exports = mongoose.model('hospital',patientSchema)