const express = require('express');
const router = express.Router();


const {addBook,deleteBook,getAllBooks,updateBook,validUser,addPost} = require("../controller/book-controller")

router.get('/',(req,res)=>{
    res.send('api started with auth-router')
})


router.route("/addbook").post(addBook) 
router.route("/allbook").get(getAllBooks) 
router.route("/deletebook/:id").delete(deleteBook) 
router.route("/updatebook/:id").put(updateBook) 
router.route("/addpost").post(validUser,addPost)

module.exports = router;