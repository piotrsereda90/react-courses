import React,{useContext} from 'react';
import UserMenu from './subcomponents/UserMenu';
import AdminMenu from './subcomponents/AdminMenu';
import * as types  from '../../helpers/consts';
import bemCssModule from 'bem-css-modules';
import { StoreContext } from '../../store/StoreProvider';

import {default as AsideMenuStyles} from './AsideMenu.module.scss';

const block = bemCssModule(AsideMenuStyles);

const AsideMenu = () => {
  const { user } = useContext(StoreContext);

  const AdminMenuComponent = user?.accessLevel === types.ADMIN_TYPE
    ? <AdminMenu/>
    : null;

  return (
    <section className={block()}>
        <div className={block('nav-wrapper')}>
        <UserMenu isUserLogged={Boolean(user)}/>
        {AdminMenuComponent}
      </div>
    </section>
  )
}

export default AsideMenu;