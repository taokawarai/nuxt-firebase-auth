// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: runtimeConfig.public.apiKey as string,
    authDomain: runtimeConfig.public.authDomain as string,
    projectId: runtimeConfig.public.projectId as string,
    storageBucket: runtimeConfig.public.storageBucket as string,
    messagingSenderId: runtimeConfig.public.messagingSenderId as string,
    appId: runtimeConfig.public.appId as string,
    measurementId: runtimeConfig.public.measurementId as string,
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  getAuth(firebaseApp);
});
