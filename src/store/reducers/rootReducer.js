import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import { combineReducers } from "redux";

const rootreducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootreducer;
