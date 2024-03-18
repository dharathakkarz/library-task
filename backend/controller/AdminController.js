const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

// Generate JWT token
const generateToken = (userId, email, isAdmin) => {
  return jwt.sign(
    {
      userId,
      email,
      isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};

const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin@123'; 
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ msg: "Invalid admin credentials" });
    }

    
    const token = generateToken('admin', email, true);//admin token
    res.status(200).json({ msg: "Admin login successful", token });
  } catch (error) {
    console.error('Error in admin login:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

module.exports = { adminLogin };
