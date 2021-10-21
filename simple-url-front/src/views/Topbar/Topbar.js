import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <header>
      <div className="navbar box-shadow p-3">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <h1 className="my-0 mr-md-auto">Bitly</h1>
          </a>
          <a className="btn btn-outline-primary">Login</a>
        </div>
      </div>
    </header>
  )
};

export default Topbar;
