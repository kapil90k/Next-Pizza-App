import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk4qhG_H6PRqnzyzGoToREsc9RE33byhY",
  authDomain: "pizza-order-419f7.firebaseapp.com",
  projectId: "pizza-order-419f7",
  storageBucket: "pizza-order-419f7.appspot.com",
  messagingSenderId: "382133411151",
  appId: "1:382133411151:web:7d9d797196b08961a7f93a",
};

const app = initializeApp(firebaseConfig);

// const db = app.firestore();
const auth = getAuth();

// export { db, auth };
export { auth };
