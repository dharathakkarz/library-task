


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/user/UserAction';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/navbar/Nav';

const Login = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const state = useSelector((state) => state.userLogin) || {};
  const { error } = state;

  const onSubmit = async (data) => {
    const { email, password } = data;

    if (email.trim() === '' || password.trim() === '') {
      setError('email', { type: 'manual', message: 'Email and password are required.' });
    } else {
      dispatch(loginUser(email, password)).then(() => {
        navigate('/book'); 
      });
    }
  };

// const Login = () => {
//   const { register, handleSubmit, setError, formState: { errors } } = useForm();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const state = useSelector((state) => state.userLogin) || {};
//   const { error } = state;

//   useEffect(() => {
//     // Check if the user is already logged in (i.e., token exists in localStorage)
//     const token = localStorage.getItem('token');
//     if (token) {
//       navigate('/book');
//     }
//   }, [navigate]);

//   const onSubmit = async (data) => {
//     const { email, password } = data;

//     if (email.trim() === '' || password.trim() === '') {
//       setError('email', { type: 'manual', message: 'Email and password are required.' });
//     } else {
//       dispatch(loginUser(email, password))
//         .then((token) => {
//           localStorage.setItem('token', token); // Store the token in localStorage
//           navigate('/book'); // Redirect the user to the desired page
//         })
//         .catch((error) => {
//           setError('email', { type: 'manual', message: error.message });
//         });
//     }
//   };


  return (
    <>
      
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input
                          {...register('email', { required: 'Email is required.' })}
                          id="email"
                          type="email"
                          className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="Enter email"
                        />
                        {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                          {...register('password', { required: 'Password is required.' })}
                          id="password"
                          type="password"
                          className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                          placeholder="Password"
                        />
                        {errors.password && <p className="invalid-feedback">{errors.password.message}</p>}
                      </div>
                      <button type='submit' className='btn btn-outline-light btn-lg px-5'>Login</button>
                      <p className="mt-3 mb-0">New to account? <Link to="/register" className="text-white-50 fw-bold link-text">Register</Link></p>
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

export default Login;
