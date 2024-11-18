const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
    bloodGroup: String,
    quantity: String,
    location: String,
    description: String,
});

module.exports = mongoose.model('BloodRequest', bloodRequestSchema);
