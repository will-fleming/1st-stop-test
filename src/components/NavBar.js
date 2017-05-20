import React from 'react';
import {Link} from 'react-router';

const NavBar = () => {
  return (
    <div>
      <nav className='nav has-shadow'>
        <div className='container'>
          <Link className='nav-item is-tab is-active' to='/addData'>
            Add Data
          </Link>
          <Link className='nav-item is-tab' to='/viewData'>
            View Json
          </Link>
          <Link className='nav-item is-tab' to='/viewRdi'>
            View Returned Debit Items
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;