import React,{useState, useContext, useEffect} from "react";
import bemCssModules from 'bem-css-modules';
import Modal from '../Modal';
import request from '../../helpers/request';

import { default as LoginStyles } from './LoginForm.module.scss'
import { StoreContext } from "../../store/StoreProvider";

const block = bemCssModules(LoginStyles);

const LoginForm = ({ handleOnClose, isModalOpen }) => {

  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ validateMessage, setValidateMessage ] = useState('');

  const { setUser } = useContext(StoreContext);

  const handleOnChanageLogin = ({target: { value }}) => setLogin(value)
  const handleOnChanagePassword = ({target: { value }}) => setPassword(value)
  
  const handleOnCloseModal = (e) => {
    e.preventDefault()
    handleOnClose()
  }

  const resetStateOfInputs = () => {
    setLogin('')
    setPassword('')
    setValidateMessage('')
  }

  const handleOnSubmit  = async e => {
    e.preventDefault();
    const { data, status }= await request.post(
      '/users',
      {login, password}
    );
    if(status === 200){
      setUser(data.user);
      resetStateOfInputs();
      handleOnClose()
    } else {
      setValidateMessage(data.message);
    }
  }

  useEffect(()=> {
    //reset data if modal is closing
    if(isModalOpen) {
      resetStateOfInputs();
    }
  },[isModalOpen])


  const validateMessageComponent = validateMessage.length 
    ? <p className={block('validate-message')}>{validateMessage}</p>
    : null;

  return(
    <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeCloseOnOutSideClick={true}>
      {validateMessageComponent}
      <form className={block()} method="post" onSubmit={handleOnSubmit}>
        <div className={block('row')}>
          <label>
            Login:
            <input type="text"  value={login} onChange={handleOnChanageLogin}/>
          </label>
        </div>
        <div className={block('row')}>
          <label>
            Password:
            <input type="password" value={password} onChange={handleOnChanagePassword} />
          </label>
        </div>
        <div className={block('row')}>
          <button type="submit">Login</button>
          <button onClick={handleOnCloseModal} type="button">Cancel</button>
        </div>
      </form>
    </Modal>
  )
}
export default LoginForm;