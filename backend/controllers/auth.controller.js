import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler';

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser  = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    return res.json({ message: 'User  already exists with this email address.' });
  }

  // Create user
  const user = await User.create({
    username,
    email,
    password
  });

  if (user) {
    const token = generateToken(user._id);
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser  = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/auth/logout
// @access  Private
export const logoutUser  = (req, res) => {
  try {
    // Clear the cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
    });

    // Optionally clear the session if using session management
    req.session = null; // Clear the session

    // Log the logout action
    console.log(`User  logged out successfully: ${req.session.user?.id || 'Unknown User'}`);

    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ message: 'An error occurred while logging out' });
  }
};


// @desc    Check authentication status
// @route   GET /api/auth/status
// @access  Private
export const checkAuthStatus = (req, res) => {
  try {
    // Check if the user is logged in
    const isLoggedIn = !!req.session.user; // Use double negation to convert to boolean
    return res.status(200).json({ isLoggedIn });
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return res.status(500).json({ message: 'An error occurred while checking authentication status' });
  }
};

