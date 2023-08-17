import React,{ useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import bemCssModules from 'bem-css-modules'

import { default as ModalStyles } from './Modal.module.scss';

const block = bemCssModules(ModalStyles)

const Modal = ({children, handleOnClose, isOpen, shouldBeCloseOnOutSideClick, }) => {

  const modalRef = useRef(null);

  useEffect(()=> {
    if(!modalRef.current){
      return;
    }
    const {current: modal} = modalRef;

    if(isOpen){
      modal.showModal();
    } else {
      modal.close();
    }
  },[isOpen])

  useEffect(()=> {
    //when close with esc button
    const { current: modal } = modalRef;

    const handleCancel = event => {
      event.preventDefault()
      handleOnClose()
    }

    modal.addEventListener('cancel', handleCancel);

    return () => {
      modal.removeEventListener('cancel', handleCancel)
    }
  },[handleOnClose])

  const handleOutsideClick = ({ target }) => {
    const { current } = modalRef;

    if(shouldBeCloseOnOutSideClick && target === current){
      handleOnClose();
    };
  };

  return createPortal((
    <dialog className={block()} ref={modalRef} onClick={handleOutsideClick}>
      {children}
    </dialog>
  ), document.body);
};
export default Modal;