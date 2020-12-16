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

  async deleteToDoListById(id) {
    const result = await listCollection
      .where("userUid", "==", auth.currentUser.uid)
      .where("id", "==", id)
      .get();

    result.forEach((doc) => doc.ref.delete());
  }

  async updateToDoList(data) {
    const result = await listCollection
      .where("userUid", "==", auth.currentUser.uid)
      .where("id", "==", data.id)
      .get();

    await result.forEach(async (doc) => await doc.ref.update(data));
  }
}

export default new ToDoListService();
