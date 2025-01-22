
import { 
  FETCH_TASKS_REQUEST, 
  FETCH_TASKS_SUCCESS, 
  FETCH_TASKS_FAILURE, 
  ADD_TASK, 
  DELETE_TASK
} from '../types/actionTypes';
import { 
  fetchTasksFromFirebase, 
  addTaskToFirebase,
  deleteTaskFromFirebase
} from '../firebase/firestore';

// Получение задач из Firebase
export const fetchTasks = () => async (dispatch: any) => {
  dispatch({ type: FETCH_TASKS_REQUEST });

  try {
    const tasks = await fetchTasksFromFirebase();
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: tasks });
  } catch (error) {
    dispatch({ type: FETCH_TASKS_FAILURE, payload: error.message });
  }
};

// Добавление новой задачи в Firebase
export const addTask = (task: { title: string; description: string; deadline: string }) => async (dispatch: any) => {
  try {
    // Формируем полную задачу с дополнительными полями
    const newTask = {
      ...task,
      id: Date.now().toString(), // Уникальный идентификатор
      status: 'pending', // Статус по умолчанию
      createTime: new Date().toISOString(), // Текущая дата и время в формате ISO
    };

    // Сохраняем задачу в Firebase
    await addTaskToFirebase(newTask);

    // Обновляем Redux
    dispatch({ type: ADD_TASK, payload: newTask });
  } catch (error) {
    console.error('Error adding task: ', error);
  }
};

export const deleteTask = (taskId: string) => async (dispatch: any) => {
  try {
    await deleteTaskFromFirebase(taskId); // Удаление из Firebase
    dispatch({ type: DELETE_TASK, payload: taskId }); // Удаление из Redux
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};