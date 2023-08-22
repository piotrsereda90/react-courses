import React, { useContext } from 'react';

import Courses from '../Courses';
import Error404 from '../Error404';

import bemCssModules from 'bem-css-modules';
import * as types  from '../../helpers/consts';
import { Route, Routes} from 'react-router-dom';
import { default as ContentStyles } from './Content.module.scss';
import { StoreContext } from '../../store/StoreProvider';

const block = bemCssModules(ContentStyles);

const Content = () => {

  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdminLogged = user?.accessLevel === types.ADMIN_TYPE;

  return(
    <main className={block()}>
        <Routes>
          <Route path='/' element={<Courses/>}/>
          { isUserLogged && <Route  path='/my-courses' element={<p>Moje kursy</p>}/>}
          { isAdminLogged && <Route path='/manage-courses' element={<p>Zarzadzanie kursami</p>}/>}
          <Route path='*' element={<Error404/>} />
        </Routes>
    </main>
  )
}

export default Content;
