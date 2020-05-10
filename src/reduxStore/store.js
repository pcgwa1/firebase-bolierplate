import { createStore } from 'redux'
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore
import { fbApp } from "../config/firebase";
import rootReducer from './reducers'

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    enableClaims: true // Get custom claims along with the profile
}

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
    firebase: fbApp,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export { store, rrfProps }