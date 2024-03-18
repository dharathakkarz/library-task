const express = require('express');
const router = express.Router();


const {adminAuthMiddleware,deleteAuthor,updateAuthor,getAllAuthours,getSingleAuthor,getSingleBook,addBook,deleteBook,getAllBooks,updateBook,addPost,getAllPosts,searchBooks, userAuthMiddleware} = require("../controller/BookController")

router.get('/',(req,res)=>{
    res.send('api started with auth-router')
})

//api of books with admin only
router.route("/addbook").post(adminAuthMiddleware,addBook) 
router.route("/allbook").get(adminAuthMiddleware,getAllBooks) 
router.route("/deletebook/:id").delete(adminAuthMiddleware,deleteBook) 
router.route("/updatebook/:id").put(adminAuthMiddleware,updateBook)
router.route('/singlebook/:id').get(adminAuthMiddleware,getSingleBook); 
router.route('/search').post(adminAuthMiddleware,searchBooks);

//api of post
router.route("/addpost").post(userAuthMiddleware,addPost)
router.route('/allposts').get(userAuthMiddleware,getAllPosts);
router.route("/allbooks").get(userAuthMiddleware,getAllBooks) 


//api of authors
router.route('/allauthors').get(adminAuthMiddleware,getAllAuthours);
router.route('/singleauthors/:authorName').get(adminAuthMiddleware,getSingleAuthor);
router.route('/updateauthors/:authorName').put(adminAuthMiddleware,updateAuthor);
router.route('/deleteauthors/:authorName').delete(adminAuthMiddleware,deleteAuthor);

module.exports = router;