const express = require("express");
const router = express.Router();
const Doctor = require('./Doctor');

//routes
router.get('/',(req,res) => {
    res.send('Hello Node API')
})

//Get All Doctors information
router.get('/Doctor', async(req,res)=> {
    try{
        const getDoctors = await Doctor.find({});
        res.json(getDoctors);
        res.status(201);
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//create a doctor user
router.post('/create', async(req,res) => {
    try{
        const doctor = new Doctor(req.body);
        console.log(req.body);
        doctor.save();
        res.status(201).json(doctor);
    }catch(error){
        
        res.status(500).json({ error: 'Failed to create a doctor'});
    }
})


//get individual doctor user
router.get('/Doctor/:id', async(req,res)=> {
    try{
        const _id = req.params.id;
        const getDoctor = await Doctor.findById({_id});
        res.json(getDoctor);
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//delete doctor information
router.delete('/Doctor/:id', async(req,res)=> {
    try{
        const _id = req.params.id;
        const updateDoctor = await Doctor.findByIdAndUpdate(_id);
        res.json("Doctor deleted successfully");
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

//update doctor information
router.patch('/Doctor/:id', async(req,res)=> {
    try{
        const _id = req.params.id;
        const updateDoctor = await Doctor.findByIdAndDelete(_id, req.body, {new: true});
        res.json(updateDoctor);
    }catch (error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;