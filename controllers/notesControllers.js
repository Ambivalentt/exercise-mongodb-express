const Data = require('../models/schema.js')
const express = require('express');
const app = express();

app.use(express.json());

//add notes POST
const postNotes = async (req, res) => {

if(!req.body.name || !req.body.age || !req.body.email){
        return res.status(400).json({message: 'Please fill all fields'})
    }
    const {name, age, email} = req.body;
    const newData = new Data({name, age, email});
    await newData.save();
    res.status(202).json(newData);
} 

//get Notes
const getNotes = async (req, res) => {
    const data = await Data.find();
    const databyId = await Data.findById(req.params.id);
    if(data.length === 0 || !databyId){
        return res.status(400).json({message: 'No data found'}) 
    }

    res.status(200).json(databyId);
}

// delete
const deleteNotes = async (req, res) => {
    const data = await Data.findByIdAndDelete(req.params.id);
    if(!data){
        return res.status(400).json({message: 'Id not found'})
    }
    res.status(200).json({message: 'Data deleted'})
}

//patch or put
const editNotes = async (req,res) =>{
    const data = await Data.findByIdAndUpdate(req.params.id, req.body, {new:true}) //overwrite:true reemplaza todo el objeto y deja solo lo que se envio 
    if(!data){
        return res.status(400).json({message:'data not founded'})
    }

    return res.status(200).json({message:'data updated'})
}
module.exports = {postNotes, getNotes, deleteNotes, editNotes}; 