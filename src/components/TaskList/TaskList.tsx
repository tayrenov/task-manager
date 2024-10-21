import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { removeTask, sortTasks } from '../../redux/reduxSlice';
import "./TaskList.css"
import { TaskItem, TaskListProps } from "../../dataTypes";

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    const dispatch = useDispatch();
    
    const [tasksPerPage, setTasksPerPage] = useState(2);  // По умолчанию 2 задачи на странице
    var currentWidthCategory ='large'

    const [currentPage, setCurrentPage] = useState(1);  // Храним номер текущей страницы
    // Функция для определения количества задач на странице в зависимости от ширины экрана
    const updateTasksPerPage = () => {
        const width = window.innerWidth;
        if (width <= 960 && currentWidthCategory !== 'small') {
            setTasksPerPage(2);  // Для экранов шириной 1200px и больше — 5 задач на странице
            console.log('__'+currentWidthCategory !== 'small')
            console.log(currentWidthCategory+'<=960>')
            currentWidthCategory='small';
        } else if (width > 960 && width <= 1400 && currentWidthCategory !== 'medium') {
            setTasksPerPage(4);  // Для экранов шириной 768px и больше — 3 задачи на странице
            console.log('__'+currentWidthCategory !== 'medium')
            console.log(currentWidthCategory+'768')
            currentWidthCategory='medium';
        } else if (width > 1440 && currentWidthCategory !== 'large') {
            setTasksPerPage(6);
            console.log('__'+currentWidthCategory !== 'large')
            console.log(currentWidthCategory+'1200')
            currentWidthCategory='large';
        }
    };
    // Используем useEffect для отслеживания изменения размера экрана
    useEffect(() => {
        updateTasksPerPage();  // Обновляем количество задач при монтировании компонента
        window.addEventListener('resize', updateTasksPerPage);  // Добавляем слушатель изменения размера окна

        return () => {
            window.removeEventListener('resize', updateTasksPerPage);  // Убираем слушатель при размонтировании компонента
        };
    }, []);
    // Определяем задачи для текущей страницы
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
    // Определяем общее количество страниц
    const totalPages = Math.ceil(tasks.length / tasksPerPage);
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
    
    return (
        <div className='tasks-list'>
            <h1>Task List</h1>
            <button hidden onClick={() => dispatch(sortTasks())}>Sort by Deadline</button>

            {currentTasks.map(task => (
                <div className='tasks-list__item'>
                    <Link to={"/task/"+task.id} key={task.title} className='tasks-list__item__link'>
                        <h2 className='tasks-list__title'>{task.title}</h2>
                        <p className='tasks-list__description'>{task.description}</p>
                        <p>Status: {task.status ? 'Completed' : 'Pending'}</p>
                        <p>Deadline: {task.deadline?.toDateString() || 'No deadline'}</p>
                    </Link>
                <button onClick={() => dispatch(removeTask(task.title))} className='__remove-task-button'></button>
                <div className='__status-wrapper'></div>
                </div>

            ))}

            {/* Пагинация — скрываем, если страниц всего одна */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        
                    </button>
                    <div>{currentPage} of {totalPages}</div>
                    <button onClick={nextPage} disabled={currentPage === totalPages}>
                        
                    </button>
                </div>
            )}
        </div>
    );
};

export default TaskList;
