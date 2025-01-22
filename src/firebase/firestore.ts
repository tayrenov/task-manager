import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import  app  from './firebaseConfig';

const db = getFirestore(app);

export const fetchTasks = async () => {
  const tasksCollection = collection(db, "tasks");
  const taskSnapshot = await getDocs(tasksCollection);
  const taskList = taskSnapshot.docs.map(doc => doc.data());
  return taskList;
};

export const addTask = async (task) => {
  const tasksCollection = collection(db, "tasks");
  await addDoc(tasksCollection, task);
};