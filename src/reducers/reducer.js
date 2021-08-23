 const Reducers = (state = [], action) =>
{
    switch(action.type)
    {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return state = action.payload;
        default:
            return state;
    }
}

export default Reducers;