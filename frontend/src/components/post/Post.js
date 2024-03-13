import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createPost } from '../../redux/actions/user/postAction';
import Nav from '../user/Nav';

const Post = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(createPost(data));
      console.log('Post created successfully');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Title:</label>
          <input {...register('title', { required: true })} />
          <br />
          <label>Content:</label>
          <textarea {...register('content', { required: true })} />
          <br />
          <button type="submit">Create Post</button>
        </form>
      </div>
    </>
  );
};

export default Post;
