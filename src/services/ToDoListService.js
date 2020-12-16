import { auth, listCollection } from "@/services/Api";

class ToDoListService {
  async getToDoList() {
    const data = await listCollection
      .where("userUid", "==", auth.currentUser.uid)
      .get();

    let resultData = [];
    data.forEach((item) => {
      resultData.push(item.data());
    });

    return resultData;
  }
}

export default new ToDoListService();
