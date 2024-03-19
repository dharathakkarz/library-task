const express = require('express');
const router = express.Router();


const {getAllBooksUser,deleteAuthor,updateAuthor,getAllAuthours,getSingleAuthor,getSingleBook,addBook,deleteBook,getAllBooks,updateBook,addPost,getAllPosts,searchBooks, userAuthMiddleware} = require("../controller/BookController")

router.get('/',(req,res)=>{
    res.send('api started with auth-router')
})

//api of books with admin only
router.route("/addbook").post(userAuthMiddleware,addBook) 
router.route("/allbook").get(userAuthMiddleware,getAllBooks) 
router.route("/deletebook/:id").delete(userAuthMiddleware,deleteBook) 
router.route('/singlebook/:id').get(userAuthMiddleware,getSingleBook); 
router.route("/updatebook/:id").put(userAuthMiddleware,updateBook)
router.route('/search').post(userAuthMiddleware,searchBooks);

//api of post
router.route("/addpost").post(userAuthMiddleware,addPost)
router.route('/allposts').get(userAuthMiddleware,getAllPosts);
router.route("/allbookuser").get(userAuthMiddleware,getAllBooksUser) 


//api of authors
router.route('/allauthors').get(userAuthMiddleware,getAllAuthours);
router.route('/singleauthors/:authorName').get(userAuthMiddleware,getSingleAuthor);
router.route('/updateauthors/:authorName').put(userAuthMiddleware,updateAuthor);
router.route('/deleteauthors/:authorName').delete(userAuthMiddleware,deleteAuthor);

module.exports = router;