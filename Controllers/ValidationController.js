const PatientsModel = require('../models/PatientModel');

const validatePhone = async(request, response) => {
    const PatientToBeValidated = request.body.PatientPhoneNumber;

    try
    {
        const validPhone = await PatientsModel.findOne({PatientPhoneNumber:PatientToBeValidated})
        if (validPhone)
        {
            return response.status(200).json(validPhone)
        }
        response.status(400).json({message:'Invalid Patient ID ...'})
    }
    catch(error)
    {
        response.status(500).json({message : error.message})
    }

}

module.exports = {validatePhone}