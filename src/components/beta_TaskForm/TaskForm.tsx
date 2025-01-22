import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TaskForm.css'
import { AppDispatch } from '../../beta_redux/store/store';
import { RootState } from '../../beta_redux/store/store';
import { addTask } from '../../beta_redux/actions/taskActions';
import { Task } from '../../beta_redux/types/Task';

const TaskForm: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch: AppDispatch = useDispatch();

    const [newTask, setNewTask] = useState<Omit<Task, 'id' | 'createTime'>>({
        title: '',
        description: '',
        status: 'pending',
        deadline: '',
    });
    
    const handleAddTask = () => {
        const task: Task = {
          ...newTask,
          id: Date.now().toString(),
          createTime: new Date().toISOString(),
        };
        dispatch(addTask(task));
      };
    return (
        <>
            <h1>Tasks</h1>
            <input
                type="text"
                placeholder="Title"
                value={newTask.title}
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
            />
            <input
                type="date"
                value={newTask.deadline}
                onChange={e => setNewTask({ ...newTask, deadline: e.target.value })}
            />
            <select
                value={newTask.status}
                onChange={e => setNewTask({ ...newTask, status: e.target.value as Task['status'] })}
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={handleAddTask}>Add Task</button>
        </>

    );
};

export default TaskForm;