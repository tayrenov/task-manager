import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';
import TaskList from './components/TaskList/TaskList';
import TaskItem from './components/TaskItem/TaskItem';
import TaskForm from './components/TaskForm/TaskForm';
import PageMainContent from './pages/PageMainContent';
import PageItem from './pages/PageItem';
import PageAbout from './pages/PageAbout';
import PageContacts from './pages/PageContacts';


const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<number>(0);

  const handleModalOpen = (activeComponent:number) => {
    setActiveComponent(1);
    console.log(activeComponent)
  }

  const handleModalClose= (activeComponent:number) => {
    setActiveComponent(0);

  }

  return (
    <Router>
      <div className='app'>

        <header className='app-header'>
          <Link to='/'>Task Manager</Link>

          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contacts'>Contacts</Link>
          <button onClick={()=>handleModalOpen(1) }>Add task</button>
        </header>

        <div className='app-container main-content'>
        <Routes>
          <Route path="/" element={<PageMainContent />} />
          <Route path="/task/:id" element={<PageItem />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/contacts" element={<PageContacts />} />
        </Routes>
        <Routes>
          <Route path="/task/:id" element={<TaskItem />} />
        </Routes>
          
        </div> 

        <footer className='app-footer'>
          <div className='app-footer__container app-container'>
            <div className='app-footer__container__about'>About about</div>
            <Link to='/' className='app-footer__container__add-task'>
              <div className='app-footer__container__add-task__icon'></div>
            </Link>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
