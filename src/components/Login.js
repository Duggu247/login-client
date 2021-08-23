import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../actions/action';
import { Link, Redirect } from 'react-router-dom';

const Login = () =>{

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(validateUser());
  // },[dispatch]);

  const handleSubmit = (event) =>{
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      dispatch(validateUser(email,password));
     
  }

  const loginValidate = useSelector(state => state.Reducers );
  console.log(loginValidate.message);
  if(loginValidate.message === 'Success')
  {
    return <Redirect to='/dashboard' />
  }


  return (
    <>
      <div className="container">
        <form className="form-signin mx-auto" onSubmit={ handleSubmit }>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
        
        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>
        
        <p className="mt-2 text-muted">Don't have an account? <Link to="/register" className="text-primary">Register Now</Link></p>
        
        <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
      </form>
      </div>

      <style jsx={true}>
        {`
        .form-signin{
          width: 20rem;
          margin-top: 10rem;
        }
          
        `}
      </style>
    </>
  )
}

export default Login;
