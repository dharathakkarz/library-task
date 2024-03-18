const Book = require("../models/BookModel.js");
const PersonalPost = require("../models/PostMode.js")
const jwt = require('jsonwebtoken')


// Authentication middleware
const validUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    console.error('Error verifying token:', error);

    return res.status(401).json({ message: 'Unauthorized: user' });
  }
};




//create personal post
const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPersonalPost = new PersonalPost({ title, content });
    await newPersonalPost.save();

    res.status(201).json({ message: 'Personal post added', post: newPersonalPost });
  } catch (error) {
    console.error('Error adding personal post:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

//fetch all post
const getAllPosts = async (req, res) => {
  try {
    const allPosts = await PersonalPost.find();
    res.status(200).json({ posts: allPosts });
  } catch (error) {
    console.error('Error getting all posts:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};


//get single book
const getSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    console.log('Book ID:', bookId); //  fetch single book with id 

  
    const book = await Book.findById(bookId);

    if (book) {
    
      res.status(200).json({ book });
    } else {
    
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    
    console.error('Error fetching book by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



//to add new book
const addBook = async (req, res) => {
  try {

    const { title, author, category, price, description, image } = req.body;
  
    //create new book
    const newBook = new Book({
          title, author, category,description,image,price, available: true,
      })
      await newBook.save();   
      res.status(201).json({ msg: 'book added', book: newBook })
  }
  catch (error) {
   
      res.status(500).json({ msg: 'server error' });
  }
}

//delete books
const deleteBook = async (req, res) => {
    try {
      const bookId = req.params.id;
  
      //check book is present in db or not
      const existingBook = await Book.findById(bookId);
      if (!existingBook) {
        return res.status(404).json({ msg: 'not found' });
      }
  
      
      await Book.deleteOne({ _id: bookId }); //delete book with id
  
      res.status(200).json({ msg: 'Book deleted', deletedBook: existingBook });
    } catch (error) {
      console.error('can not delete book:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  };
  

  //get all books from db without pagination
  // const getAllBooks = async(req,res) =>{
  //   try {
  //       const allBooks = await Book.find();

  //       res.status(200).json({ books: allBooks });
  //       console.log("all books fetched successfully")
        
  //   } catch (error) {
  //       console.error('Error getting all books:', error);
  //       res.status(500).json({ msg: 'Server error' });
        
  //   }
  // }
 

  //get all books from db with pagination
  const getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Current page number
        const limit = parseInt(req.query.limit) || 4; // Number of items per page
  
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
  
        const allBooks = await Book.find().skip(startIndex).limit(limit);
  
        const totalBooks = await Book.countDocuments();
  
        const totalPages = Math.ceil(totalBooks / limit);
  
        // Next & Previous Page 
        const pagination = {};
        if (endIndex < totalBooks) {
            pagination.next = {
                page: page + 1,
                limit: limit
            };
        }
  
        if (startIndex > 0) {
            pagination.previous = {
                page: page - 1,
                limit: limit
            };
        }
  
        res.status(200).json({
            books: allBooks,
            pagination: pagination
        });
    } catch (error) {
        console.error('Error getting all books:', error);
        res.status(500).json({ msg: 'Server error' });
    }
  }
  



  //update book with id

  const updateBook = async(req,res)=>{
    try {
        const bookId = req.params.id;
        const { title, author, category, price, description, image } = req.body;

        //check book from db
        const existingBook = await Book.findById(bookId);
        if (!existingBook) {
          return res.status(404).json({ msg: 'Book not found' });
        }

         //update that book with existing one
        existingBook.set({
            title: title || existingBook.title,
            author: author || existingBook.author,
            description: description || existingBook.description,
            image: image || existingBook.image,
            price: price || existingBook.price,
            category: category || existingBook.category,
          });
          await existingBook.save();
         res.status(200).json({ books: existingBook });
          console.log("book updated successfully")
    
        
    } catch (error) {
        console.error('can not update book:', error);
        res.status(500).json({ msg: 'Server error' });
        
    }
  }
  
  //single search book
  const searchBooks = async (req, res) => {
    const { searchTerm } = req.body;
  
    try {
      //reg for case-sensitiv
      const books = await Book.find({ title: { $regex: new RegExp(searchTerm, 'i') } });
  
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //fetch authors 
   const getAllAuthours = async (req,res)=>{
    try {
      const authors = await Book.distinct('author');
      res.status(200).json({authors});
      
    } catch (error) {
      console.error('Error getting all authors:', error);
    res.status(500).json({ msg: 'Server error' });
      
    }
   }
  
  //get single authour
  const getSingleAuthor = async(req,res) =>{
    const {authorName} = req.params;
    try {
      const author = await Book.findOne({author : authorName});
      if(author){
        res.status(200).json({author})
      }else{
        res.status(404).json({message:'author not found'})
      }
    } catch (error) {
      console.error('Error getting single author:', error);
    res.status(500).json({ msg: 'Server error' });
      
    }
  }


 

// update an author
const updateAuthor = async (req, res) => {
  const { authorName } = req.params;
  const { newName } = req.body; 

  try {
    const author = await Book.findOne({ author: authorName });//find author with name


    if (author) {
      author.author = newName; 
      await author.save();//save updated author 
      res.status(200).json({ message: 'Author updated', author });
    } else {
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    console.error('Error updating author:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

//delete author
const deleteAuthor = async (req, res) => {
  const { authorName } = req.params;

  try {
    //  author by name
    const author = await Book.findOne({ author: authorName });

    if (author) {
      // Remove  author 
      await Book.deleteOne({ author: authorName });
      res.status(200).json({ message: 'Author deleted' });
    } else {
     
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    console.error('Error deleting author:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};
  
  


module.exports = {updateAuthor,deleteAuthor,getAllAuthours,getSingleAuthor, getSingleBook,addBook ,deleteBook,getAllBooks , updateBook ,addPost,getAllPosts,validUser,searchBooks};
