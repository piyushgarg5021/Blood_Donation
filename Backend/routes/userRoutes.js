// // const express = require('express');
// // const User = require('../models/User');
// // const router = express.Router();

// // // Signup route
// // router.post('/signup', async (req, res) => {
// //     const { username, email, password, contact,blood_group,age,address,location }  = req.body;
// //     console.log(req.body);
    
// //     const newUser = new User({ username, email, password , contact,blood_group,age,address,location });
// //     await newUser.save();
// //     res.json({ message: 'Signup successful' });
// // });

// // // Login route
// // router.post('/login', async (req, res) => {
// //     const { email, password } = req.body;
// //     const user = await User.findOne({ email, password });
// //     if (user) {
// //         res.json({ message: 'Login successful' });
// //     } else {
// //         res.status(401).json({ message: 'Invalid credentials' });
// //     }
// // });

// // // router.post('/search', async (req, res) => {
// // //     const { blood_group, location } = req.body;
// // //     console.log(req.body);
    
// // //     const user = await User.find({ blood_group, location }).select("-password");
// // //     res.json({message: user});
// // // });

// // // module.exports = router;

// // router.post('/search', async (req, res) => {
// //     const { blood_group, location } = req.body;
// //     try {
// //         const users = await User.find({ blood_group, location }).select("-password");
// //         if (users.length > 0) {
// //             res.json({ message: users });
// //         } else {
// //             res.json({ message: "No donors found" });
// //         }
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).json({ message: "Server error" });
// //     }
// // });

// const express = require('express');
// const User = require('../models/User');
// const router = express.Router();

// // Signup route
// router.post('/signup', async (req, res) => {
//     const { username, email, password, contact, blood_group, age, address, location }  = req.body;
//     console.log(req.body);
    
//     const newUser = new User({ username, email, password , contact, blood_group, age, address, location });
//     await newUser.save();
//     res.json({ message: 'Signup successful' });
// });

// // Login route
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email, password });
//     if (user) {
//         res.json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// });

// // // Search Route 
// // router.post('/search', async (req, res) => {
// //     const { blood_group, location } = req.body;
// //     console.log(req.body);
    
// //     try {
// //         const users = await User.find({ blood_group, location }).select("-password");
// //         if (users.length > 0) {
// //             res.json({ success: true, donors: users });
// //         } else {
// //             res.json({ success: false, message: "No donors found" });
// //         }
// //     } catch (error) {
// //         console.error("Error searching for donors:", error);
// //         res.status(500).json({ success: false, message: "Server error" });
// //     }
// // });
// //Search route
// router.post('/search', async (req, res) => {
//     const { blood_group, location } = req.body;
//     console.log(req.body);
    
//     // Retrieve all details except password
//     const users = await User.find({ blood_group, location }).select("-password");
    
//     res.json({ success: true, donors: users });
// });

// app.post('/api/organizations/register', async (req, res) => {
//     const { org_name, email, password, contact, address, location } = req.body;
  
//     try {
//       // Code to save organization data in the database
//       // e.g., `await Organization.create({ org_name, email, password, contact, address, location });`
//       res.status(201).json({ message: 'Organization registered successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error during registration' });
//     }
//   });
  
// // Search route
// // router.post('/search', async (req, res) => {
// //     const { blood_group, location } = req.body;
// //     console.log(req.body);
    
// //     const user = await User.find({ blood_group, location }).select("-password");
// //     res.json({ message: user });
// // });

// module.exports = router; // Correct export


const express = require('express');
const User = require('../models/User'); // Import User model (adjust path if needed)
const router = express.Router();

// User Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password, contact, blood_group, age, address, location } = req.body;
    
    try {
        const newUser = new User({ username, email, password, contact, blood_group, age, address, location });
        await newUser.save();
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ message: 'Server error during signup' });
    }
});

// User Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ success: false, message: 'Server error during login' });
    }
});

// Donor Search Route
router.post('/search', async (req, res) => {
    const { blood_group, location } = req.body;

    try {
        const users = await User.find({ blood_group, location }).select("-password");
        if (users.length > 0) {
            res.status(200).json({ success: true, donors: users });
        } else {
            res.status(404).json({ success: false, message: "No donors found" });
        }
    } catch (error) {
        console.error('Error in search:', error);
        res.status(500).json({ message: 'Server error during donor search' });
    }
});

router.get('/profile/:email', async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findOne({ email }).select("-password");
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Server error fetching profile' });
    }
});

module.exports = router;
