import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Datos originales del proyecto grupal
// export const firebaseConfig = {
//   apiKey: "AIzaSyD3ToUSR1jwFA5oUswh7AlCij7HZRjzyk0",
//   authDomain: "ingenia-9b3cf.firebaseapp.com",
//   projectId: "ingenia-9b3cf",
//   storageBucket: "ingenia-9b3cf.appspot.com",
//   messagingSenderId: "323031970459",
//   appId: "1:323031970459:web:c87d699cb925afe5694c3e",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAchDDBm5zx1tEq_V6q1DQ-8592YN774FY",
  authDomain: "ingenia-4c222.firebaseapp.com",
  projectId: "ingenia-4c222",
  storageBucket: "ingenia-4c222.appspot.com",
  messagingSenderId: "709941745193",
  appId: "1:709941745193:web:7e97770b1a81360f5e2e38",
  measurementId: "G-G08EDPCNWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
