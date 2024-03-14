
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/user/userAction';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const userLogin = useSelector((state) => state.userLogin);
  // const userData = userLogin && userLogin.userData;

  const navToLogin = () => {
    navigate('/login');
  };

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();

  //   dispatch(registerUser(username, email, password, phone));
    
  //   navToLogin();//after register go to login
  // };
  const onSubmit = (data) => {
    if (data && data.username && data.email && data.password && data.phone) {
      dispatch(registerUser(data.username, data.email, data.password, data.phone));
      navToLogin();
    } else {
      console.error("Form data is incomplete or undefined", data);
    }
  };

  return (
    <>
    <Navbar/>
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Register</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                    name='username'
                    type='text'
                    className={`form-control ${errors?.username ? 'is-invalid' : ''}`}
                    {...register('username', { required: 'Username is required' })}
                    placeholder='Enter Name'
                  />
                  {errors?.username && <p className='invalid-feedback'>{errors.username.message}</p>}
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                    name='email'
                    type='email'
                    className={`form-control ${errors?.email ? 'is-invalid' : ''}`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder='Enter email'
                  />
                   {errors?.email && <p className='invalid-feedback'>{errors.email.message}</p>}
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                    name='password'
                    type='password'
                    className={`form-control ${errors?.password ? 'is-invalid' : ''}`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 6, message: 'Password must be at least 6 characters' },
                      validate: (value) => {
                        
                        return true; 
                      },
                    })}
                    placeholder='Password'
                  />
                  {errors?.password && <p className='invalid-feedback'>{errors.password.message}</p>}
                
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Phone</label>
                <input
                    name='phone'
                    type='text'
                    className={`form-control ${errors?.phone ? 'is-invalid' : ''}`}
                    {...register('phone', { required: 'Phone is required' })}
                    placeholder='Phone No'
                  />
                  {errors?.phone && <p className='invalid-feedback'>{errors.phone.message}</p>}
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Register
              </button>
              <div className='form-group'>
                  <p className='text-center'>
                    Already registered? <span onClick={navToLogin} className='link-text'>Go to login page</span>
                  </p>
                </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup; //1st


