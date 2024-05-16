import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDw9PHZLdXTFAc52v9mUBhd85-TQDbjaDs",
  authDomain: "social-a163c.firebaseapp.com",
  projectId: "social-a163c",
  storageBucket: "social-a163c.appspot.com",
  messagingSenderId: "1083810820292",
  appId: "1:1083810820292:web:cc718c9c3d16cfbcadd991",
  //measurementId: "G-64GJ9JLNB4",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
