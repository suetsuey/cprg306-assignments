import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const q = query(collection(db, `users/${userId}/items`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, `users/${userId}/items`);
  const newItemRef = await addDoc(itemsRef, item);
  return newItemRef.id;
}
