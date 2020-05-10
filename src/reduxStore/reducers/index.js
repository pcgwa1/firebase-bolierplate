import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form'
import auth from "./auth";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: reduxFormReducer,
    auth
});

