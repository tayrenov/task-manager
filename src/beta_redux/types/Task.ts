export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    createTime: string; // ISO строка даты
    deadline: string; // ISO строка даты
}