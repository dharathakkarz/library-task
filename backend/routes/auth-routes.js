const express = require('express');
const router = express.Router();

const {register} = require("../controller/auth-controller")
const {login} = require("../controller/auth-controller")
const {adminLogin} = require("../controller/admin-controller")

router.get('/',(req,res)=>{
    res.send('api started with auth-router')
})

router.route("/register").post(register)
router.route("/login").post(login)

router.route("/admin/login").post(adminLogin);

module.exports = router;