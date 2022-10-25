import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR_ZBuqZzZ6Ry7K5kbtbvuJT0q9cdcugI",
  authDomain: "restaurant-app-414b7.firebaseapp.com",
  databaseURL: "https://restaurant-app-414b7-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-414b7",
  storageBucket: "restaurant-app-414b7.appspot.com",
  messagingSenderId: "987361200149",
  appId: "1:987361200149:web:d357f4db78cc6479aca61c"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };