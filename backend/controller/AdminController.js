
const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin@123';


const jwt = require('jsonwebtoken');
const generateAdminToken = () => {
  return jwt.sign(
    {
      isAdmin: true,
    },
    process.env.ADMIN_JWT_SECRET,
    { expiresIn: '30d' }
  );
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== adminEmail || password !== adminPassword) {
      return res.status(401).json({ msg: "Invalid admin credentials" });
    }

    const token = generateAdminToken();
    res.status(200).json({ msg: "Admin login successful", token });
  } catch (error) {
    console.error('Error in admin login:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

module.exports = { adminLogin };