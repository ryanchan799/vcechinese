import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  return getDocs(collection(db, "threads"))
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
    .then((threads) => Response.json({ threads }));
}
