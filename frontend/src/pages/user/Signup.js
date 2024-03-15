
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/user/UserAction';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/navbar/Nav';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate('/login');
  };

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
      
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          className={`form-control form-control-lg ${errors.username ? 'is-invalid' : ''}`}
                          {...register('username', { required: 'Username is required' })}
                          placeholder="Enter Name"
                        />
                        {errors.username && <div className='invalid-feedback'>{errors.username.message}</div>}
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          placeholder="Enter email"
                        />
                        {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                          {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters' },
                          })}
                          placeholder="Password"
                        />
                        {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="phone">Phone</label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                          {...register('phone', { required: 'Phone is required' })}
                          placeholder="Phone No"
                        />
                        {errors.phone && <div className='invalid-feedback'>{errors.phone.message}</div>}
                      </div>

                      <button type='submit' className='btn btn-outline-light btn-lg px-5'>Register</button>
                    </form>

                    <p className="text-center mt-4">
                      Already registered? <span onClick={navToLogin} className="text-white-50 fw-bold link-text">Go to login page</span>
                    </p>

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

export default Signup;
