
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
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Create Post</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <label>Title:</label>
                        <input className="form-control form-control-lg" {...register('title', { required: true })} />
                      </div>
                      <div className="form-group">
                        <label>Content:</label>
                        <textarea className="form-control form-control-lg" {...register('content', { required: true })} />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg px-5">Create Post</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;