const express = require('express');
const router = express.Router();


const {getSingleBook,addBook,deleteBook,getAllBooks,updateBook,addPost,getAllPosts,searchBooks} = require("../controller/book-controller")

router.get('/',(req,res)=>{
    res.send('api started with auth-router')
})


router.route("/addbook").post(addBook) 
router.route("/allbook").get(getAllBooks) 
router.route("/deletebook/:id").delete(deleteBook) 
router.route("/updatebook/:id").put(updateBook) 
// router.route("/addpost").post(validUser,addPost)
router.route("/addpost").post(addPost)
router.route('/search').post(searchBooks);
router.route('/allposts').get(getAllPosts);
router.route('/singlebook/:id').get(getSingleBook);

module.exports = router;