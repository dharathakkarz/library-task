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
    console.log('Book ID:', bookId); // Add this line to log the book ID

  
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



//add book
const addBook = async (req, res) => {
    try {

      const { title, author, category, price, description, image } = req.body;
        console.log('Title:', title);
        console.log('Author:', author);
        console.log('Category:', category);
        console.log('Price:', price);
        console.log('description:', description);
       // console.log('image:', image);
        console.log(req.body)

        const newBook = new Book({
            title, author, category,description,image,price, available: true,
        })
        await newBook.save();   
        res.status(201).json({ msg: 'book added', book: newBook })
    }
    catch (error) {
        console.error('can not add book', error);
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
  

  //get all books from db
  const getAllBooks = async(req,res) =>{
    try {
        const allBooks = await Book.find();

        res.status(200).json({ books: allBooks });
        console.log("all books fetched successfully")
        
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
  
  
  
  


module.exports = { getSingleBook,addBook ,deleteBook,getAllBooks , updateBook ,addPost,getAllPosts,validUser,searchBooks};
