// src/beta_redux/firebase/firestore.ts
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);

// Получение всех задач из Firestore
export const fetchTasksFromFirebase = async () => {
  const tasksCollection = collection(db, 'tasks');
  const taskSnapshot = await getDocs(tasksCollection);
  const taskList = taskSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return taskList;
};

// Добавление задачи в Firestore
export const addTaskToFirebase = async (task: { title: string; description: string }) => {
  const tasksCollection = collection(db, 'tasks');
  await addDoc(tasksCollection, task);
};

export const deleteTaskFromFirebase = async (taskId: string) => {
  const taskDocRef = doc(db, 'tasks', taskId); // Ссылка на документ задачи
  await deleteDoc(taskDocRef);
};