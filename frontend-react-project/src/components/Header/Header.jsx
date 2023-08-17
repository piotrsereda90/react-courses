import React, { useState,useContext } from "react";
import bemCssModules from 'bem-css-modules';

import { StoreContext } from "../../store/StoreProvider";

import {default as HeaderStyle} from './Header.module.scss';
import LoginForm from "../LoginForm";

const block = bemCssModules(HeaderStyle);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {user, setUser} = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false);

  const handleOnClick = () => {
    if(Boolean(user)){
      setUser(null)
    } else {
      setIsModalOpen(true);
    }
  }

  const setProperlylabel = Boolean(user) ? 'Log Out' : 'Log In'

  return(
    <header className={block()}>
      <div className={block('logo-wrapper')}/>
      <h1 className={block('title')}>Super courses for Programmers</h1>
      <button onClick={handleOnClick}>{setProperlylabel}</button>
      <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen}/>
    </header>
  )
}
export default Header;