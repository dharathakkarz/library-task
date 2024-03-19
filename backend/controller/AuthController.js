const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');




// Registration
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });//check user in db
        }

        const saltRounds = 10; // Increase the number of salt rounds for better security but it make this complex and time consuming
        const hash_password = await bcrypt.hash(password, saltRounds);

        //new user create
        const userCreated = await User.create({ username, email, phone, password: hash_password });

        res.status(201).json({ msg: "registration complete",userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
      
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};



//login 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user exists
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid email or password" });
        }

    //      // Check if user is admin
    // if (userExist.isAdmin) {
    //     // Generate JWT token for admin
    //     const adminToken = jwt.sign(
    //       {
    //         userId: userExist._id.toString(),
    //         email: userExist.email,
    //         isAdmin: userExist.isAdmin
    //       },
         
          
    //     );
  
    //     return res.status(200).json({ msg: "Admin login successful", token: adminToken });
    //   }

        // Generate JWT token for user
        const tokenPayload = {
            userId: userExist._id.toString(),
            email: userExist.email,
            isAdmin: userExist.isAdmin
        };
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
        //token for login
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '30d' });
        res.header("Authorization", `Bearer ${token}`);
        res.status(200).json({ msg: "Login successful", token });
    } catch (error) {
      
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

module.exports = { register , login};
