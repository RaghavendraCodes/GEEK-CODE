import { UserSchema } from '../models/username.model.js';

// Create a new user
export const createUser = async (req, res) => {
    const { usernameGeek, leetcodeUsername, gfgUsername } = req.body;

    if (!leetcodeUsername || !gfgUsername) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Check for duplicate usernames
        const existingUser = await UserSchema.findOne({usernameGeek, leetcodeUsername, gfgUsername });
        if (existingUser) {
            return res.status(409).json({ message: 'User with these usernames already exists.' });
        }

        const newUser = await UserSchema.create({ usernameGeek, leetcodeUsername, gfgUsername });
        res.status(201).json({ message: 'User created successfully.', user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve a user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserSchema.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a user by ID
export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { leetcodeUsername, gfgUsername } = req.body;

    if (!leetcodeUsername && !gfgUsername) {
        return res.status(400).json({ message: 'At least one field is required to update.' });
    }

    try {
        const updatedUser = await UserSchema.findByIdAndUpdate(
            id,
            { leetcodeUsername, gfgUsername },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully.', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a user by ID
export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserSchema.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
