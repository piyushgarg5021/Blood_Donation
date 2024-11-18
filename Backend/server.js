
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const userRoutes = require('./routes/userRoutes');

// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // // MongoDB connection
// // mongoose.connect('mongodb+srv://pysg5021:pysg2210@cluster0.3jyxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // }).then(() => console.log('Connected to MongoDB'))
// //   .catch(err => console.log('MongoDB connection error:', err));

// // // Routes
// // app.use('/api/users', userRoutes);

// // const PORT = 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes'); // Correct import

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb+srv://pysg5021:pysg2210@cluster0.3jyxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // Routes
// app.use('/api/users', userRoutes); // Correct usage

// const PORT = 5000; 
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const organizationRoutes = require('./routes/organizationRoutes'); // Import organization routes
const bloodrequestRoutes = require('./routes/bloodRequestRoutes'); // Import blood request routes

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB connection
mongoose.connect('mongodb+srv://pysg5021:pysg2210@cluster0.3jyxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes); // Use userRoutes for handling user-related routes
app.use('/api/organizations', organizationRoutes); // Use organizationRoutes for handling organization-related routes
app.use('/api/blood-requests', bloodrequestRoutes); // Use bloodrequestRoutes for handling blood request-related routes

// Server listening
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
