import app from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./config";

class Firebase {
  constructor() {
    if (!app.getApps.length) {
      app.initializeApp(firebaseConfig);
    }
  }
}

export const firebase = new Firebase();
