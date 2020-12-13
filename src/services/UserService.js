import { auth } from "@/services/Api";

class UserService {
  async signUp(email, password) {
    const result = await auth.createUserWithEmailAndPassword(email, password);

    return {
      uid: result.user.uid,
      displayName: result.user.displayName,
      email: result.user.email,
    };
  }

  async signIn(email, password) {
    const result = await auth.signInWithEmailAndPassword(email, password);

    return {
      uid: result.user.uid,
      displayName: result.user.displayName,
      email: result.user.email,
    };
  }

  async signOut() {
    return auth.signOut();
  }
}

export default new UserService();
