import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reduxSlice';

// Настраиваем Store
export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});

// Типы для использования в компонентах
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;