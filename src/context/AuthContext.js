import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errMessage: action.payload};
        case 'signin':
            return {errMessage: '', token: action.payload};
        case 'signOut':
            return {token: null, errMessage: ''};
        case 'clear_error_message':
            return {...state, errMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = async dispatch => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: 'signin', payload: token });
        navigate('TrcakList');
    } else {
        navigate('Signup');
    }
};

const clearErrMessage = dispatch =>
    dispatch({ type: 'clear_error_message'});

const signup = dispatch => async ({ email, password }) => {
    try {
        console.log('1');
        const response = await trackerApi.post('/signup', {email, password});
        console.log('2');
        await AsyncStorage.setItem('token', response.data.token);
        console.log('3');
        dispatch({type: 'signin', payload: response.data.token});
        console.log('4');

        navigate('TrcakList');
    } catch (err) {
        console.log('11111');
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});

        navigate('TrackList');
    } catch (err) {
        console.log(err.message);
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
    }
};

const signOut = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signOut' });
    navigate('Signup');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signOut, clearErrMessage, tryLocalSignin },
    { token: null, errMessage: '' }
);