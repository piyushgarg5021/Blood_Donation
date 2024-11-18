// models/Organization.js
const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    org_name: String,
    email: String,
    password: String,
    contact_person: Number,
    contact_number: Number,
    registration_number: String,
    address: String,
    location: String
});

module.exports = mongoose.model('Organization', organizationSchema);
