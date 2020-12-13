import { auth } from "@/services/Api";

class UserService {
  async signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    return auth.signOut();
  }
}

export default new UserService();
