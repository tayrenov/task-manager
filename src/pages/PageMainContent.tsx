import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import TaskList from "../components/TaskList/TaskList";



const PageMainContent = () => {

    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return (
        <>
            {tasks.length!==0 
            ? (
                <>
                    <h1>Task List</h1>
                    <TaskList tasks={tasks} />
                </>
            ) 
            : <GreetingPlaceholder />}
        </>
        
    )
}

const GreetingPlaceholder = () => {
    return (
        <div>GreetingPlaceholder</div>
    )
}

export default PageMainContent;