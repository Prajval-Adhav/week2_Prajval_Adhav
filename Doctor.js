const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expertise: {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    isMBBS: {
        type: Boolean,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
