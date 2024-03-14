import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../redux/actions/admin/adminAction';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null); // State to store login error

  const onSubmit = async (data) => {
    try {
      await dispatch(adminLogin(data.email, data.password));
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginError('Invalid email or password'); 
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Admin Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input {...register('email', { required: 'Email is required.' })} type="email" id="email" className={`form-control ${errors.email || loginError ? 'is-invalid' : ''}`} />
                  {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input {...register('password', { required: 'Password is required.' })} type="password" id="password" className={`form-control ${errors.password || loginError ? 'is-invalid' : ''}`} />
                  {errors.password && <p className="invalid-feedback">{errors.password.message}</p>}
                </div>
                {loginError && <p className="text-danger">{loginError}</p>} 
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
