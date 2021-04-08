

import {SIGNIN, SIGNUP, RETRIEVE_DATA, LOGOUT} from '../actions/authUser';


const initialState = {
    token: null,
    userId: null,
}


const authUser = (state = initialState, action) => {
    //create a switch with parameters the type of action
    switch(action.type) {
        

        case SIGNUP: //case signUp 
            return {
                token: action.token, //return our action data: token and userID
                userId: action.userId
            };

        case SIGNIN:
            return {
                token: action.token, //return our action data: token and userID
                userId: action.userId
            };


        case RETRIEVE_DATA: 
            return {
                token: action.token, //return our action data: token and userID
                userId: action.userId
            };

        case LOGOUT:
            return initialState; //return initialState that is the same of "empty"
        
        default:
            return state
    }
}

export default authUser;