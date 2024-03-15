
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/user/userAction';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

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

  return (
    <>
      <Navbar />
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