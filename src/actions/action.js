import * as api from '../api/api';

//Action creators 

export const validateUser = (email, password) => async (dispatch) =>{
    
    try {
        const { data } = await api.validateLogin(email, password);
        dispatch({ type : 'LOGIN', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const logoutUser = () => async (dispatch) =>{

    try {
        const data = [];
        await dispatch({ type : 'LOGOUT', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}