const express = require('express');
const BloodRequest = require('../models/BloodRequest');
const router = express.Router();

router.post('/', async (req, res) => {
    const { bloodGroup, quantity, location, description } = req.body;
    try {
        const bloodReq = await BloodRequest.create({ bloodGroup, quantity, location, description });
        if (bloodReq) {
            res.status(200).json({ message: 'Blood Request created', success: true });
        } else {
            res.status(401).json({ message: 'Failed to create Blood Request' });
        }
    } catch (error) {
        console.error('Error in creating Blood Request:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

router.get('/', async (req, res) => {
    try {
        const requests = await BloodRequest.find();
        res.status(200).json(requests);
    } catch (error) {
        console.error('Error fetching requests:', error);
        res.status(500).json({ message: 'Server error fetching requests' });
    }
});

module.exports = router;
