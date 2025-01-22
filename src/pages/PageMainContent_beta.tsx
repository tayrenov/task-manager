import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../beta_redux/actions/taskActions';
import { AppDispatch } from '../beta_redux/store/store';
import TaskList from '../components/beta_TaskList/TaskList';

const PageMainContent_beta = () => {

    return (
        <div>
            <h1>Task List</h1>

            <TaskList />
        </div>
        
    )
}


export default PageMainContent_beta;