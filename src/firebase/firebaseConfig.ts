import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCC1b8IN0HdP-6CmZGKYDMS2gnWn0apyW0",
    authDomain: "test-task-a8b04.firebaseapp.com",
    projectId: "test-task-a8b04",
    storageBucket: "test-task-a8b04.firebasestorage.app",
    messagingSenderId: "52690979157",
    appId: "1:52690979157:web:f89bd70d995c570d3447dc"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Получаем ссылку на базу данных
const db = getFirestore(app);

// Пример получения данных из коллекции
async function fetchTasks() {
    const tasksCollection = collection(db, "tasks"); // Укажи название коллекции
    const taskSnapshot = await getDocs(tasksCollection);
    const taskList = taskSnapshot.docs.map(doc => doc.data());
    console.log(taskList);  // Массив задач
}

// Пример добавления задачи в коллекцию
async function addTask(task) {
    const tasksCollection = collection(db, "tasks");
    await addDoc(tasksCollection, task);
}

export default app;