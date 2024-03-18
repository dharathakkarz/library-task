import axios from 'axios';
import { CREATE_POST,FETCH_POSTS } from '../../ActionType'; 
import { SERVER_URL ,BOOK} from '../../../constants/Constants'
// const createPost = (postData) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const response = await axios.post(
//      ` ${SERVER_URL}${BOOK}/addpost`,
//       postData,
//       config
//     );

//     dispatch({
//       type: CREATE_POST,
//       payload: response.data,
//     });

//     console.log('Post created successfully');
//   } catch (error) {
//     console.error('Error creating post:', error);
//   }
// };



// const fetchPosts = () => async (dispatch) => {
//   try {
//     const response = await axios.get( ` ${SERVER_URL}${BOOK}/allposts`);
//     dispatch({
//       type: FETCH_POSTS,
//       payload: response.data.posts, 
//     });
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//   }
// };

// export { createPost,fetchPosts };


// postAction.js

// Function to retrieve the authentication token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Your existing code for createPost and fetchPosts actions...

const createPost = (postData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}` // Include the token in the request headers
      },
    };

    const response = await axios.post(
      `${SERVER_URL}${BOOK}/addpost`,
      postData,
      config
    );

    dispatch({
      type: CREATE_POST,
      payload: response.data,
    });

    console.log('Post created successfully');
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${SERVER_URL}${BOOK}/allposts`, {
      headers: {
        'Authorization': `Bearer ${getToken()}` // Include the token in the request headers
      }
    });
    dispatch({
      type: FETCH_POSTS,
      payload: response.data.posts,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export { createPost, fetchPosts };

