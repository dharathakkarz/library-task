const express = require('express');
const router = express.Router();


const {deleteAuthor,updateAuthor,getAllAuthours,getSingleAuthor,getSingleBook,addBook,deleteBook,getAllBooks,updateBook,addPost,getAllPosts,searchBooks} = require("../controller/BookController")

router.get('/',(req,res)=>{
    res.send('api started with auth-router')
})

//api of books
router.route("/addbook").post(addBook) 
router.route("/allbook").get(getAllBooks) 
router.route("/deletebook/:id").delete(deleteBook) 
router.route("/updatebook/:id").put(updateBook) 
// router.route("/addpost").post(validUser,addPost)
router.route("/addpost").post(addPost)
router.route('/search').post(searchBooks);
router.route('/allposts').get(getAllPosts);
router.route('/singlebook/:id').get(getSingleBook);

//api of authors
router.route('/allauthors').get(getAllAuthours);
router.route('/singleauthors/:authorName').get(getSingleAuthor);
router.route('/updateauthors/:authorName').put(updateAuthor);
router.route('/deleteauthors/:authorName').delete(deleteAuthor);

module.exports = router;