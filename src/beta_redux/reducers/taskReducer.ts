// src/beta_redux/reducers/taskReducer.ts
import { 
  FETCH_TASKS_REQUEST, 
  FETCH_TASKS_SUCCESS, 
  FETCH_TASKS_FAILURE, 
  ADD_TASK,
  DELETE_TASK
} from '../types/actionTypes';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createTime: string; // ISO строка даты
  deadline: string; // ISO строка даты
}

const initialState = {
  tasks: [] as Task[],
  loading: false,
  error: null as string | null,
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK: // Обработка удаления задачи
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;