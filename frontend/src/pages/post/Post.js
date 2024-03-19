
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../redux/actions/user/PostAction';
// import Nav from '../../components/navbar/Nav';

// const Post = () => {
//   const { register, handleSubmit } = useForm();
//   const dispatch = useDispatch();
//   const [posts, setPosts] = useState([]);

//   const onSubmit = async (data) => {
//     try {
//       await dispatch(createPost(data));
//       console.log('Post created successfully');
     
//       setPosts([...posts, data]);
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   return (
//     <>
//       <Nav />
//       <section className="vh-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//               <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
//                 <div className="card-body p-5 text-center">
//                   <div className="mb-md-5 mt-md-4 pb-5">
//                     <h2 className="fw-bold mb-2 text-uppercase">Create Post</h2>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                       <div className="form-group">
//                         <label>Title:</label>
//                         <input className="form-control form-control-lg" {...register('title', { required: true })} />
//                       </div>
//                       <div className="form-group">
//                         <label>Content:</label>
//                         <textarea className="form-control form-control-lg" {...register('content', { required: true })} />
//                       </div>
//                       <div className="form-group mt-2">
//                         <button type="submit" className="btn btn-primary btn-lg px-4 ">Create Post</button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* display posts */}
//       <div className="container">
//         <div className="row">
//           {posts.map((post, index) => (
//             post && (
//               <div className="col-6 col-md-6 col-lg-4 col-xl-4 mt-4" key={index}>
//                 <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
//                   <div className="card-body p-5 text-center">
//                     <div className="mb-md-5 mt-md-4 pb-5">
//                       <h2 className="fw-bold mb-2 text-uppercase">New Post</h2>
//                       <p>Title: {post.title}</p>
//                       <p>Content: {post.content}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Post; 

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createPost, } from '../../redux/actions/user/PostAction';
import Nav from '../../components/navbar/Nav';

const Post = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const onSubmit = async (postData) => {
    try {
      await dispatch(createPost(postData));
      console.log('Post created successfully');
      setPosts([...posts, postData]);
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
                      <div className="form-group mt-2">
                        <button type="submit" className="btn btn-primary btn-lg px-4 ">Create Post</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* display posts */}
      <div className="container">
        <div className="row">
          {posts.map((post, index) => (
            post && (
              <div className="col-6 col-md-6 col-lg-4 col-xl-4 mt-4" key={index}>
                <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">New Post</h2>
                      <p>Title: {post.title}</p>
                      <p>Content: {post.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;


