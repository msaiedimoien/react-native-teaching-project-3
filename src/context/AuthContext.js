import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
  return async ({ email, password }) =>{
      try {
          const response = await trackerApi.post('/signup', { email, password});
      }catch (err) {
          console.log(err.message);
      }
  };
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
    { isSignedIn: false }
);