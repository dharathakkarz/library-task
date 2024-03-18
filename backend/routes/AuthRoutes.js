const express = require('express');
const router = express.Router();

const {register} = require("../controller/AuthController")
const {login} = require("../controller/AuthController")
const {adminLogin} = require("../controller/AdminController")


router.get('/',(req,res)=>{
    res.send('api started with auth-router')
})

//api routes for user
router.route("/register").post(register)
router.route("/login").post(login)


//api routes for admin
router.route("/admin/login").post(adminLogin);


module.exports = router;