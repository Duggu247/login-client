import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import {logoutUser} from '../actions/action';
// import { useSelector } from 'react-redux';

const Dashboard = () =>
{
    const dispatch = useDispatch();
    const history = useHistory();


    const logout = (e) => {
        // return <Redirect to='/' />
        e.preventDefault();
        dispatch(logoutUser());
        history.replace('/');
    } 

    const userValue = useSelector( state => state.Reducers);
    console.log(userValue );

    return (
        <>
            <p>Hi { userValue.data[0].name } </p>
            <button  onClick={ logout } className="btn btn-primary tn-sm" >Logout</button>
        </>
    )
}

export default Dashboard;