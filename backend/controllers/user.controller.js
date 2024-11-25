import {UserSchema} from '../models/username.model.js'

export const createUser = async (req, res) => {
    const { leetcodeUsername, gfgUsername } = req.body; 

    if(!leetcodeUsername || !gfgUsername) {
        return res.status(400).json({message: 'all fields are required.'})
    }

    try {
        const newUser = await UserSchema.create({leetcodeUsername, gfgUsername}); 
        res.status(201).json(newUser);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}; 

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserSchema.find(); 
        res.status(200).json(users); 
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

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

export const deleteUserById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await UserSchema.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

