import axios from 'axios';
import { CREATE_POST } from '../../actions/books/actionType'; 

const createPost = (postData) => async (dispatch, getState) => {
  try {
   
    const token = getState().userlogin.userData.token;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
    };

    const response = await axios.post('http://localhost:5000/api/book/addpost', postData, config);

    dispatch({
      type: CREATE_POST,
      payload: response.data,
    });

    console.log('Post created successfully');
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

export { createPost };
