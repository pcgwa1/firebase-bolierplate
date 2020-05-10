import { fbApp } from '../../config/firebase'
import { 
  requestLogin,
  receiveLogin,
  loginError,
  requestLogout,
  receiveLogout,
  logoutError,
  verifyRequest,
  verifySuccess
} from '../../reduxStore/actions'

const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  fbApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(loginError());
    });
};

const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  fbApp
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(logoutError());
    });
};

const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  fbApp.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};

export default {
  loginUser,
  logoutUser,
  verifyAuth
}