import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import PageMainContent from './pages/PageMainContent';
import PageItem from './pages/PageItem';
import PageAbout from './pages/PageAbout';
import PageContacts from './pages/PageContacts';
import PageAddItem from './pages/PageAddItem';

import PageMainContent_beta from './pages/PageMainContent_beta';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

  return (
    <Router>
      <div className='_task-manager is-flex is-flex-direction-column'>
        <Header />

        <main className='main-content py-6'>
          <div className='container is-max-desktop is-fluid'>
            <Routes>
              <Route path="/" element={<PageMainContent />} />
              <Route path="/betaMain" element={<PageMainContent_beta />} />
              <Route path="/task/:id" element={<PageItem />} />
              <Route path="/task/add" element={<PageAddItem />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/contacts" element={<PageContacts />} />
            </Routes>
          </div>
        </main> 

        <Footer/>
      </div>
    </Router>
  );
};

export default App;
