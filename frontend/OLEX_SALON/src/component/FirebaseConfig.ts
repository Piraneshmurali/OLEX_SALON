import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyDvF6Uf9byiASyUTji1CE_AjOFOmlXZ770",
    authDomain: "sano-1a3e4.firebaseapp.com",
    projectId: "sano-1a3e4",
    storageBucket: "sano-1a3e4.appspot.com",
    messagingSenderId: "978490364193",
    appId: "1:978490364193:web:01fdb095852632e493ae60",
  };

  export const Fireapp = initializeApp(firebaseConfig);
  export const ImageDb = getStorage(Fireapp);