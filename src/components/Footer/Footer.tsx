import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer has-background-dark has-text-white is-align-content-center py-4'>
          <div className='container is-max-desktop is-fluid is-flex is-justify-content-space-between is-align-content-center'>
            <div className='column is-half'>About about</div>
            <div className='column is-half has-text-right'>
              <Link to='/task/add' className="button is-link">
                <div>+</div>
              </Link>
            </div>
          </div>
        </footer>
    );
}

export default Footer;