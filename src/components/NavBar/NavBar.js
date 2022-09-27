import { NavLink } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink className='navy' to='/rgb/10/22/42'>
            Navy
        </NavLink>
        <NavLink className='orange' to='/rgb/199/56/4'>
            Orange
        </NavLink>
        <NavLink className='grey' to='/rgb/238/238/238'>
            Grey
        </NavLink>
      </nav>
    </header>
  );
}
