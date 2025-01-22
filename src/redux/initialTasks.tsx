// src/data/initialTasks.ts

import { TaskItem } from '../dataTypes';

export const initialTasksData: TaskItem[] = [
    {
        id: '1', 
        title: 'Buy groceries',
        description: 'Purchase milk, bread, and eggs from the store.',
        status: false,
        deadline: new Date('2024-06-23')
    },
    {
        id: '2', 
        title: 'Finish project report',
        description: 'Complete the final report for the client project.',
        status: true,
        deadline: new Date('2024-06-26')
    },
    {
        id: '3', 
        title: 'Book flight tickets',
        description: 'Reserve flight tickets for the upcoming vacation.',
        status: true,
        deadline: new Date('2024-06-23')
    },
    {
        id: '4', 
        title: 'Organize desk',
        description: 'Tidy up the desk area and sort paperwork.',
        status: false,
        deadline: new Date('2024-06-26')
    },
    {
        id: '5', 
        title: 'Call plumber',
        description: 'Schedule an appointment to fix the leaky faucet.',
        status: false,
        deadline: new Date('2024-06-23')
    },
    {
        id: '6', 
        title: 'Workout session',
        description: 'Attend the gym for a 1-hour workout session.',
        status: true,
        deadline: new Date('2024-06-26')
    },
    {
        id: '7', 
        title: 'Prepare presentation',
        description: 'Draft slides for the quarterly business meeting.',
        status: false,
        deadline: new Date('2024-06-26')
    },
    {
        id: '8', 
        title: 'Read new book',
        description: 'Start reading the new novel purchased last week.',
        status: true,
        deadline: new Date('2024-06-23')
    },
    {
        id: '9', 
        title: 'Renew car insurance',
        description: 'Renew the car insurance policy before expiration.',
        status: false,
        deadline: new Date('2024-06-26')
    }
];
