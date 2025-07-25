import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser , checkAuthStatus
} from '../controllers/auth.controller.js';

;
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser );
router.get('/status', checkAuthStatus); // New endpoint to check login status
export default router;
