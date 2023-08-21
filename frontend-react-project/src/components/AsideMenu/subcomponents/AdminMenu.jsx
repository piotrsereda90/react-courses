import React from 'react'
import bemCssModules from 'bem-css-modules';
import { Link } from 'react-router-dom';

import { default as AsideMenuStyles } from '../AsideMenu.module.scss';

const block = bemCssModules(AsideMenuStyles);

const AdminMenu = () => (
  <>
    <p className={block('title')}>Panel Administratora</p>
    <nav>
      <ul>
        <li className={block('link')}>
          <Link to='/manage-courses'>Zarzadzanie kursami</Link>
        </li>
      </ul>
    </nav>
  </>
)

export default AdminMenu;