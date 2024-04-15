import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const documents = await getDocs(collection(db, "users"));
  const users = documents.docs.map((doc) => doc.data());
  return Response.json({ users });
}
