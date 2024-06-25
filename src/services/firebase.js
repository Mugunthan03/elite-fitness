import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQuaUFA5a9aMFJwUOeJ-ivENjAM1BF6bs",
  authDomain: "gym-project-96a52.firebaseapp.com",
  projectId: "gym-project-96a52",
  storageBucket: "gym-project-96a52.appspot.com",
  messagingSenderId: "667450243935",
  appId: "1:667450243935:web:b60653d7f4631717e554ea"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBudCNWtw_nU8vJyu_ueODjHG3Dy-BrvBQ",
//   authDomain: "elite-fitness-1e31a.firebaseapp.com",
//   projectId: "elite-fitness-1e31a",
//   storageBucket: "elite-fitness-1e31a.appspot.com",
//   messagingSenderId: "300914769350",
//   appId: "1:300914769350:web:eab78481c192cbaba046c7"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app