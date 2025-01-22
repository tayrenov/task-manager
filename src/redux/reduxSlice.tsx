import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TasksState, TaskItem, GlobalSettings } from '../dataTypes';
import { initialTasksData } from '../redux/initialTasks';

const initialState: TasksState = {
    tasks: initialTasksData,
    activeTask: null, // Изначально активной задачи нет
    settings: {
        theme: 'light', // Тема по умолчанию — светлая
        sortBy: 'deadline', // Сортировка по дедлайну
        filter: 'all' // Отображаем все задачи
    }
};

// Создание слайса для задач
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskItem>) => {
            state.tasks.push(action.payload); // Добавляем новую задачу
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.title !== action.payload); // Удаляем задачу по заголовку
        },
        setActiveTask: (state, action: PayloadAction<string>) => {
            state.activeTask = state.tasks.find(task => task.title === action.payload) || null;
        },
        clearActiveTask: (state) => {
            state.activeTask = null;
        },
        updateSettings: (state, action: PayloadAction<Partial<GlobalSettings>>) => {
            state.settings = { ...state.settings, ...action.payload };
        },
        sortTasks: (state) => {
            state.tasks.sort((a, b) => (a.deadline && b.deadline) ? a.deadline.getTime() - b.deadline.getTime() : 0);
        }
    }
});


// Экспортируем экшены
export const { addTask, removeTask, setActiveTask, clearActiveTask, updateSettings, sortTasks } = taskSlice.actions;

// Экспортируем редьюсер
export default taskSlice.reducer;


