

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/user/userAction';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../Navbar';

const Login = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  
  const state = useSelector((state) => state.userLogin) || {};
  const { error, loading, userData } = state;

  // Submit handler
  const onSubmit = async (data) => {
    const { email, password } = data;

    const navToBook = () => {
      navigate('/book'); 
    };

    if (email.trim() === '' || password.trim() === '') {
      setError('email', { type: 'manual', message: 'Email and password are required.' });
    } else {
      dispatch(loginUser(email, password));

      navToBook(); //after login
    }
  };

  return (
    <>
    <Navbar/>
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {loading && <h1>Loading</h1>}
          {error && <h1>{error}</h1>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  {...register('email', { required: 'Email is required.' })}
                  type='email'
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder='Enter email'
                />
                {errors.email && <p className='invalid-feedback'>{errors.email.message}</p>}
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  {...register('password', { required: 'Password is required.' })}
                  type='password'
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder='Password'
                />
                {errors.password && <p className='invalid-feedback'>{errors.password.message}</p>}
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;// 1st

