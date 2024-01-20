import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signInUser } from "~/composables/firebaseAuth";

// authミドルウェアを有効にしている画面への遷移、リロードの際に認証状態を監視する
// https://firebase.google.com/docs/auth/web/start?hl=ja#set_an_authentication_state_observer_and_get_user_data
export default defineNuxtRouteMiddleware(async (_from, to) => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      console.log('User is signed in');
      signInUser.value = user;
      return navigateTo(to.path)
    } else {
      console.log('User is signed out');
      return navigateTo('/');
    }
  });
});