export interface TaskListProps {
    tasks: TaskItem[];
}
// Типизация задачи
export type TaskItem = {
    id: string;  
    title: string;
    description?: string;
    status: boolean;
    deadline: Date | null | undefined;
};

// Типизация глобальных настроек
export type GlobalSettings = {
    theme: 'light' | 'dark';
    sortBy: 'deadline' | 'status';
    filter: 'all' | 'completed' | 'pending';
};

// Типизация состояния задач
export interface TasksState {
    tasks: TaskItem[];
    activeTask: TaskItem | null;
    settings: GlobalSettings;
}

// types.ts
export interface ModalState {
    isOpen: boolean;
  }
  
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

interface ToggleModalAction {
    type: typeof TOGGLE_MODAL;
    payload: boolean;
}

export type ModalActionTypes = ToggleModalAction;