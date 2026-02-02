import express from 'express';
import {getMe, handleLogin, handleLogout, handleSignup} from '../controllers/authController.js'

const router = express.Router();

//handle login request
router.post('/login', handleLogin);


//handle signup request
router.post('/signup', handleSignup);

//check for authenticated user
router.get("/me", getMe)

//handleLogout
router.post("/logout", handleLogout)

export default router;
