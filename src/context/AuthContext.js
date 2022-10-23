import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errMessage: action.payload};
        case 'signup':
            return {errMessage: '', token: action.payload};
        default:
            return state;
    }
};

const signup = dispatch => async ({ email, password }) => {
    try {
        console.log('1');
        const response = await trackerApi.post('/signup', {email, password});
        console.log('2');
        await AsyncStorage.setItem('token', response.data.token);
        console.log('3');
        dispatch({type: 'signup', payload: response.data.token});
        console.log('4');

        navigate('TrackList');
    } catch (err) {
        console.log('11111');
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
    }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
      
  };
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errMessage: '' }
);