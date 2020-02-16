import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  'put your configuration here'
};

// let firebaseAppDefined = false;

// setInterval(() => {
//   if (!firebaseAppDefined) {
//     if (firebase.app()) {
//       // Your code here
//       firebase.firestore().settings({ timestampsInSnapshots: true });
//       firebaseAppDefined = true;
//     }
//   }
// }, 100);
firebase.initializeApp(config);
export default firebase;
