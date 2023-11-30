const initialData=require('../data/initialData');
const PatientsModel = require('../models/PatientModel');

const addPatientName =async(request,response)=>{
    const newPatient=request.body;
    console.log('hello')
    try{
        const existingPatient=await PatientsModel.findOne({PatientPhoneNumber:newPatient.PatientPhoneNumber})
        if(existingPatient)
        {
            return response.status(409).json({message:'aldready exists'})
        }
        const patient=await PatientsModel.create(newPatient)
        response.status(201).json(patient)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const displayAllPatients = async(request, response)=> {

    try
    {
        const allPatients = await PatientsModel.find()
        if (allPatients.length === 0)
        {
            const initialPatients = await PatientsModel.insertMany(initialData)
            console.log("initial data inserted successfully...")
        }
        const updatedPatients = await PatientsModel.find();
    response.status(200).json(updatedPatients);
        
    }
    catch(error)
    {
        console.error(error);
        response.status(500).json({message : error.message})
    }
}

const updatePatients = async(request, response) => {
    const PatientToBeUpdated = request.body
    try{
        const updatedPatient = await PatientsModel.updateMany({PatientPhoneNumber:PatientToBeUpdated.PatientPhoneNumber},PatientToBeUpdated)
        response.status(200).json(updatedPatient)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}

const deletePatient = async(request, response) => {
    const PatientToBeDeleted = request.body
    try{
        const deletedPatient = await PatientsModel.deleteOne({PatientPhoneNumber:PatientToBeDeleted.PatientPhoneNumber})
        response.status(200).json(deletedPatient)
    }catch(error)
    {
        response.status(500).json({message : error.message})
    }
}
module.exports={
    addPatientName,
    displayAllPatients,
    updatePatients,
    deletePatient
}