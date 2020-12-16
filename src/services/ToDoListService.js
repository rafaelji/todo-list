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

  async addNewToDoList(data) {
    await listCollection.doc().set({
      ...data,
      userUid: auth.currentUser.uid,
    });
  }
}

export default new ToDoListService();
