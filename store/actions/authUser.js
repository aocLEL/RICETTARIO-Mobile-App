import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



//export our case (type of actions)
export const SIGNIN = 'SIGNIN';

export const SIGNUP = 'SIGNUP';

export const RETRIEVE_DATA = 'RETRIEVE_DATA';

export const LOGOUT = 'LOGOUT';



//doing the sign up action
export const signUp = (email, password) => {
    return async dispatch => {
        const data = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD406ggmIOtNtCY5DhWmX4_aHIqLf74EHo', {
            email: email, //passing required parameters 
            password: password,
            returnSecureToken: true, //return the token
        })
        console.log(data)

        dispatch({type: SIGNUP, token: data.data.idToken, userId: data.data.localId })
        saveToken(data.data.idToken, data.data.localId) //save token with saveToken fucntion
    }
}

//doing the signin action
export const signIn = (email, password) => {
    return async dispatch => {
        const data = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD406ggmIOtNtCY5DhWmX4_aHIqLf74EHo', {
            email: email, //passing required parameters 
            password: password,
            returnSecureToken: true, //return the token
        })
        console.log(data)

        dispatch({type: SIGNIN, token: data.data.idToken, userId: data.data.localId })
        saveToken(data.data.idToken, data.data.localId) //save token with saveToken fucntion
    }
}


export const logOut = () => {
    return {type: LOGOUT} //return only type : LOGOUT
}

//create saveToken function
const saveToken = (token, userId) => {

    AsyncStorage.setItem('@UserTokenData', JSON.stringify({ //save token and userId in a storage
        token: token,
        userId: userId,
    }))
}


export const retrieveData = () => { //recive our data when we do access into the app on ugual device
    return  async dispatch => { //return aync dispatch
        let UserTokenGrabData = await  AsyncStorage.getItem('@UserTokenData') //grab the data from the storage
        let ParsingUserTokenGrabData = JSON.parse(UserTokenGrabData); //parsing storage Data
        console.log(ParsingUserTokenGrabData)
        dispatch({type: RETRIEVE_DATA, token: ParsingUserTokenGrabData.token, userId: ParsingUserTokenGrabData.userId })
    }
}




