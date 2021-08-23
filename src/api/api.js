import axios from 'axios';

var url = "http://localhost:5001/";

export const validateLogin = async (email, password) => 
{
    const inputs = {
        "email" : email,
        "password":password
    };
    const data = await axios.post(url+"login",inputs);
    return data;
}

export const registerUser = async (name, email, password) =>
{
    const inputs = {
        "name" :name,
        "email" : email,
        "password":password
    };

    const data = await axios.post(url+"register",inputs);
    return data;
}