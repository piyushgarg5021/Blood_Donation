const express = require('express');
const Organization = require('../models/Organization'); // Import Organization model (if you have a separate schema)
const router = express.Router();

// Organization Registration route
router.post('/signup', async (req, res) => {
    const {org_name, email, password, contact_person,contact_number,registration_number,  location,address } = req.body;

    try {
        const newOrganization = new Organization({ org_name, email, password, contact_person,contact_number,registration_number,  location,address });
        await newOrganization.save();
        res.status(201).json({ message: 'Organization registered successfully' });
    } catch (error) {
        console.error('Error in organization registration:', error);
        res.status(500).json({ message: 'Server error during organization registration' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const org = await Organization.findOne({ email, password });
        if (org) {
            res.status(200).json({ message: 'Login successful', success: true });
        } else {
            res.status(401).json({ message: 'Invalid credentials', success: false });
        }
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ message: 'Server error during login', success: false });
    }
});

router.get('/notifications', async (req, res) => {
    try {
        const notifications = [
            { message: 'Donor John Doe has donated blood' },
            { message: 'Donor Jane Doe has donated blood' },
        ];
        res.status(200).json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Server error fetching notifications' });
    }
});

module.exports = router;
