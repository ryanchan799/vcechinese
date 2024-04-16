import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getUsers(paths: string[]) {
  return Promise.all(
    paths.map(async (path) => {
      const docRef = doc(db, path);
      return getDoc(docRef).then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.data();
        }
        return null;
      });
    })
  ).then((results) => results.filter((data) => data !== null));
}
