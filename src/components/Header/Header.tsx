import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const Header = () => {
    return (
        <header className='navbar has-background-primary has-text-white py-4' role="navigation" aria-label="main navigation">
          <div className='container is-max-desktop is-fluid'>
            <div className="navbar-brand">
              <Link to='/' className='_task-manager__logo-container'>
                  <Logo/>
              </Link>
            </div>  

            <nav className="navbar-end is-flex is-justify-content-space-between">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'navbar-item active' : 'navbar-item')}>
                <span>Home</span>
              </NavLink>

              <NavLink to="/Betamain" className={({ isActive }) => (isActive ? 'navbar-item active' : 'navbar-item')}>
                <span>beta Home</span>
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => (isActive ? 'navbar-item active' : 'navbar-item')}>
                <span>About</span>
              </NavLink>

              <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'navbar-item active' : 'navbar-item')}>
                <span>Contacts</span>
              </NavLink>
            </nav>
          </div>
        </header>
    );
}

export default Header;