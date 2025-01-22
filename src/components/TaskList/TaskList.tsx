import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeTask, sortTasks } from '../../redux/reduxSlice';
import "./TaskList.css"
import { ReactComponent as Icon } from '../../assets/img/arrow.svg'

import { TaskListProps } from "../../dataTypes";

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1);  
    
    // Определяем задачи для текущей страницы
    const indexOfLastTask = currentPage *2;
    const indexOfFirstTask = indexOfLastTask - 2;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
    // Определяем общее количество страниц
    const totalPages = Math.ceil(tasks.length / 2);
    // Функция для переключения на следующую страницу
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Функция для переключения на предыдущую страницу
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    console.log(currentTasks)
    return (
        <div className='tasks-list'>
            
            <button hidden onClick={() => dispatch(sortTasks())}>Sort by Deadline</button>
            {currentTasks.map(task => (
                <div className={task.status ? 'tasks-list__item active-status' : 'tasks-list__item completed-status'} key={task.id}>
                    <Link to={"/task/"+task.id} className='tasks-list__item__link'>
                        <h2 className='tasks-list__title'>{task.title}</h2>
                        <p className='tasks-list__description'>{task.description}</p>
                        <div className='tasks-list__absolute tasks-list__status'>
                            <span>Status:</span>
                            <span>{task.status ? 'Completed' : 'Active'}</span>
                        </div>
                        <div className='tasks-list__absolute tasks-list__deadline'>
                            <span>Deadline</span>
                            <span>{task.deadline?.toDateString() || 'No deadline'}</span>
                        </div>
                    </Link>
                    <button onClick={() => dispatch(removeTask(task.title))} className='__remove-task-button'></button>
                </div>

            ))}

            {/* Пагинация — скрываем, если страниц всего одна */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        <Icon className='__icon'/>
                    </button>
                    <div>{currentPage} of {totalPages}</div>
                    <button onClick={nextPage} disabled={currentPage === totalPages}>
                        <Icon className='__icon'/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default TaskList;
