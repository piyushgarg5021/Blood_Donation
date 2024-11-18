const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    contact: String,
    user_type:String,
    blood_group: String,
    age: Number,
    address:String,
    location:String,
    donation_history: [{
        date: String,
        details: String,
    }],
});

module.exports = mongoose.model('User', userSchema);
