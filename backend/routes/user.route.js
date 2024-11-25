import express from 'express'; 
import {createUser, getAllUsers, getUserById, deleteUserById} from '../controllers/user.controller.js';

const router = express.Router(); 

router.post('/', createUser); 

router.get('/', getAllUsers); 

router.get('./:id', getUserById); 

router.delete('./id', deleteUserById); 

export default router;