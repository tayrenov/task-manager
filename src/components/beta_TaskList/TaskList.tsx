import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import "./TaskList.css"

import { AppDispatch } from '../../beta_redux/store/store';
import { fetchTasks } from '../../beta_redux/actions/taskActions'; 
import { deleteTask } from '../../beta_redux/actions/taskActions';

const TaskList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch<AppDispatch>();
    const { tasks, loading, error } = useSelector((state: any) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks()); // Загружаем задачи при монтировании компонента
    }, [dispatch]);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleDeleteTask = (taskId: string) => {
      dispatch(deleteTask(taskId)); // Удаление задачи
    };

    return (
        <div className='tasks-list'>
            {tasks.map((task) => (
                <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
