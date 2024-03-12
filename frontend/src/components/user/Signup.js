
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/user/userAction';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const userData = userLogin && userLogin.userData;

  const navToLogin = () => {
    navigate('/login');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission

    dispatch(registerUser(username, email, password, phone));
    // If you still want to navigate after form submission, you can do it here
    navToLogin();
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Register</h1>

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Username</label>
                <input
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='username'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='email'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type='text'
                  className='form-control'
                  id='phone'
                  placeholder='Phone No'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
