import { ref } from 'vue';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  type User as firebaseUser
} from 'firebase/auth'

// すべての画面からアクセスできるようにするため、グローバル変数として定義
export const signInUser = ref<firebaseUser | null>(null);

export const useAuth = () => {
  // https://firebase.google.com/docs/auth/web/google-signin?hl=ja
  const signIn = async (): Promise<void> => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider).catch((error) => {
      // An error happened.
      alert(error.message);
    });
  };

  // https://firebase.google.com/docs/auth/web/google-signin?hl=ja#next_steps
  const signOut = async (): Promise<void> => {
    const auth = getAuth();
    await firebaseSignOut(auth).catch((error) => {
      // An error happened.
      alert(error.message);
    });
  };

  return {
    signIn,
    signOut
  }
}
