const express=require('express')
const router=express.Router()

const {addPatientName,displayAllPatients,updatePatients,deletePatient}=require('../Controllers/PatientsController')
const {validatePhone}=require('../Controllers/ValidationController')

router.route('/').post(addPatientName).get(displayAllPatients).patch(updatePatients).delete(deletePatient)
router.route('/validate').post(validatePhone)

module.exports=router