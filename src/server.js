require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db');
const PORT = process.env.PORT || 3000;
const router = require('../routes/notes.js')

app.use(express.json());

app.use('/api/notes', router);



app.use((req, res) =>{
    res.status(404).json({message: 'Page not found'})
})




connectDB()
.then(() =>{
    app.listen(PORT, () =>{
        console.log(`server is running in http://localhost:${PORT}`);
    })
})
.catch((err) =>{
    console.error('Error al conectar a mongoDB:', err)
})