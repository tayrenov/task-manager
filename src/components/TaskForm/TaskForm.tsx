import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reduxSlice';
import './TaskForm.css'

const generateId = () => Date.now().toString(); 

const TaskForm: React.FC = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState<Date | null>(null);
    const [status, setStatus] = useState(false);
    
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title) {
            const id = generateId(); // Генерируем id вручную
            dispatch(addTask({ id, title, description, deadline, status }));
            setTitle('');
            setDescription('');
            setDeadline(null);
        }
    };

    return (
        <>
            <div className='add-item__container'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Title</span>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Title" 
                            required 
                        />
                    </label>

                    <label>
                        <span>Description</span>
                        <input 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            placeholder="Description" 
                        />
                    </label>
                    
                    <div className='add-item__row'>
                        <label>
                            <span>Create time</span>
                            <input type='date' disabled></input>
                        </label>

                        <label>
                            <span>Deadline</span>
                            <input 
                                type="date" 
                                onChange={(e) => setDeadline(new Date(e.target.value))} 
                            />
                        </label>
                    </div>

                    <label>
                        Completed:
                        <input 
                            type="checkbox" 
                            checked={status} 
                            onChange={(e) => setStatus(e.target.checked)} 
                        />
                    </label>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </>

    );
};

export default TaskForm;