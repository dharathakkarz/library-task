

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
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Create Post</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Title:</label>
              <input className="form-control" {...register('title', { required: true })} />
            </div>
            <div className="form-group">
              <label>Content:</label>
              <textarea className="form-control" {...register('content', { required: true })} />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Create Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Post;
