import React,{useContext} from 'react';
import UserMenu from './subcomponents/UserMenu';
import AdminMenu from './subcomponents/AdminMenu';
import bemCssModule from 'bem-css-modules';
import { StoreContext } from '../../store/StoreProvider';

import {default as AsideMenuStyles} from './AsideMenu.module.scss';

const block = bemCssModule(AsideMenuStyles);

const ADMIN_TYPE = 1

const AsideMenu = () => {
  const { user } = useContext(StoreContext);

  const AdminMenuComponent = user?.accessLevel === ADMIN_TYPE
    ? <AdminMenu/>
    : null;

  return (
    <section className={block()}>
      <UserMenu isUserLogged={Boolean(user)}/>
      {AdminMenuComponent}
    </section>
  )
}

export default AsideMenu;