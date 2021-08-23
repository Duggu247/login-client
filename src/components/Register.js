import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as api from '../api/api';



const Register = () =>
{
    const [userRegistered , setUserRegistered ] = useState(0);

    let handleSubmit = async (e) =>
    {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        const { data } = await api.registerUser(name,email,password);
        if(data.rows > 0)
        {
            alert(data.message);
            setUserRegistered(1);
        }
            
    }

    if(userRegistered===1)
    {
        return <Redirect to='/' />
    }
    return (
        <>
            <div className="container">
                <form className="form-signin mx-auto" onSubmit={ handleSubmit }>
                    <h1 className="h3 mb-3 font-weight-normal">Please Fill</h1>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder=" Name" required autoFocus />
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" required  />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
                    
                    <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Register</button>
                    <Link className="btn btn-lg btn-danger btn-block mt-3 " style={{ marginLeft : 12}} to="/" >Cancel</Link>
                
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

export default Register;