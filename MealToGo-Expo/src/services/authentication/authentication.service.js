import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

//'email@test.com', 'password123'
export const loginRequest = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};
