// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { adminLogin } from '../../redux/actions/admin/AdminAction';
// import { useNavigate } from 'react-router-dom';

// const Admin = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [loginError, setLoginError] = useState(null);
//   const { loading, error } = useSelector(state => state.admin);

//   const onSubmit = async (data) => {
//     if (errors.email || errors.password) {
//       return;
//     }
 
//     try {
     
//       if (data.email !== 'admin@gmail.com' || data.password !== 'admin@123') {
//         setLoginError('Invalid email or password');
//         return;
//       }

      
//       await dispatch(adminLogin(data.email, data.password));
//       navigate('/admin/dashboard'); 
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setLoginError('Invalid email or password');
//     }
//   };

//   return (
//     <section className="vh-100 gradient-custom">
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//             <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
//               <div className="card-body p-5 text-center">
//                 <div className="mb-md-5 mt-md-4 pb-5">
//                   <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//                   <p className="text-white-50 mb-5">Please enter your login and password!</p>
//                   <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="form-outline form-white mb-4">
//                       <input {...register('email', { required: 'Email is required.' })} type="email" id="EmailX" className={`form-control form-control-lg ${errors.email || loginError ? 'is-invalid' : ''}`} />
//                       <label className="form-label" htmlFor="EmailX">Email</label>
//                       {errors.email && <p className="invalid-feedback text-danger">{errors.email.message}</p>}
//                     </div>
//                     <div className="form-outline form-white mb-4">
//                       <input {...register('password', { required: 'Password is required.' })} type="password" id="PasswordX" className={`form-control form-control-lg ${errors.password || loginError ? 'is-invalid' : ''}`} />
//                       <label className="form-label" htmlFor="PasswordX">Password</label>
//                       {errors.password && <p className="invalid-feedback text-danger">{errors.password.message}</p>}
//                     </div>
//                     {loginError && <p className="text-danger">{loginError}</p>}
//                     {error && <p className="text-danger">{error}</p>}
//                     <button type="submit" className="btn btn-outline-light btn-lg px-5" disabled={loading}>Login</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

 // export default Admin;
 



import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { adminLoginRequest } from '../../redux/actions/admin/AdminAction';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = async (data) => {
    try {
      // Dispatch the adminLoginRequest action with email and password
      const responseData = await dispatch(adminLoginRequest(data.email, data.password));

      // Check if the login request was successful and user is an admin
      if (responseData && responseData.msg === 'Admin login successful') {
        // Redirect to admin dashboard if login is successful and user is admin
        navigate('/admin/dashboard');
      } else if (responseData && responseData.msg === 'Invalid email or password') {
        // Display specific error message if login fails due to invalid email or password
        setLoginError('Invalid email or password');
      } else {
        // Display generic error message for other login failures
        setLoginError('Error logging in');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginError('Error logging in');
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
                  <p className="text-white-50 mb-5">Please enter your admin credentials.</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline form-white mb-4">
                      <input {...register('email')} type="email" id="EmailX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="EmailX">Email</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input {...register('password')} type="password" id="PasswordX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="PasswordX">Password</label>
                    </div>
                    <button type="submit" className="btn btn-outline-light btn-lg px-5">Login</button>
                  </form>
                  {loginError && <p className="text-danger mt-3">{loginError}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;

