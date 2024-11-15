const mongoose = require('mongoose'); // Correct import

// Define the user schema
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('users', userSchema);
