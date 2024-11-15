// usercontroller.js
const users = require('../Model/usermodel');

exports.adduser = async (req, res) => {
    try {
        const newUser = new users(req.body);
        await newUser.save();
        res.status(200).json({ success: 'Insert successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log("erro");
    }
}


// Fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.find(); // Fetch all documents from the 'users' collection
        res.status(200).json(allUsers); // Respond with the list of users
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Delete user by ID
exports.deleteUserById = async (req, res) => {
    const userId = req.params.id; // Get the user ID from URL parameters

    try {
        const deletedUser = await users.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ success: "User deleted successfully", deletedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("erross");    }
};

exports.updateUserById = async (req, res) => {
    const userId = req.params.id; // Get user ID from URL parameters
    const updatedData = req.body; // Get updated data from the request body

    try {
        const updatedUser = await users.findByIdAndUpdate(
            userId,
            updatedData,
            { new: true, runValidators: true } // Options: return the updated document and run validators
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            success: "User updated successfully",
            updatedUser
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

