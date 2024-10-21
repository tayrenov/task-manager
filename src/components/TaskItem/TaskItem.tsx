import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TaskItem.css'

const TaskItem = () => {
    const { id } = useParams<{ id: string }>(); // Получаем id задачи из URL
    return (
        <div className='tasks-item box-shadow'>
            <div>
                <Link to={'/task/:id'}>View task</Link>
                <Link to={'/task/:id/edit'}>Edit task</Link>
                <Link to={'/task/add'}>Add task</Link>
            </div>
            <div className='tasks-item__content-panel'>
                <div className='tasks-item__content-panel__title'>
                    <div className='tasks-item__status-box'>
                        <div className='tasks-item__status-box_circle'></div>
                    </div>
                    <span>{ id } Title</span>
                </div>
                <span className='tasks-item__description'>Description</span>
                <span>deadline 01.01.1202 / complited 01.01.1202 </span>
            </div>
            <div className='tasks-item__buttons-panel'>
                <button>toggle Status</button>
                <button>change Task</button>
                <button>delete Task</button>
            </div>
            {/* <span className='tasks-item__title'>
                <div className='tasks-item__status-box'>
                    <div className='tasks-item__status-box_circle'></div>
                </div>
                Title
            </span>
            <span className='tasks-item__description'>Description</span>
            <span>Status</span>
            <div className='tasks-item__footer'>
                
                <div className='tasks-item__buttons-panel'>
                    <button>toggle Status</button>
                    <button>change Task</button>
                    <button>delete Task</button>
                </div>
            </div> */}

        </div>

      );
}

export default TaskItem;
