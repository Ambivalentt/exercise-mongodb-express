const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
}, { collection: 'data' });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;

