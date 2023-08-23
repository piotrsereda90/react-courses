import React, { useContext } from "react";
import bemCssModules from 'bem-css-modules';
import request from '../../helpers/request';
import { useNavigate } from 'react-router';


import { default as CoursesStyles } from './Course.module.scss';
import { StoreContext } from "../../store/StoreProvider";

const block = bemCssModules(CoursesStyles);

const Course = ({ authors, id, img, price, title, isUserContext=false }) => {

  const { user, setUser } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try{
      const { data, status } = await request.patch(
        '/users',
        {
          login: user.login,
          courseId: id 
        }
      )
      if(status === 202) {
        setUser(data.user);
        navigate('/my-courses');
      }
    }
    catch(error){
      console.warn(error);
    }
  };
  
  const allAuthors = authors.join(',');
  const isUserLogged = Boolean(user);
  const shouldBuyButtonVisible = isUserLogged && !isUserContext
 
    return(
    <li>
      <article className={block()}>
        <h3 className={block('title')}>{title}</h3>
        <img className={block('image')} src="https://picsum.photos/200/150" alt={title} />
        <p className={block('price')}>{`Koszt kursu: ${price}dollar`}</p>
        <p className={block('authors')}>{`Authorzy kursu ${allAuthors}`}</p>
        {shouldBuyButtonVisible && <button onClick={handleOnClick} type="text">Buy course</button>}
      </article>
    </li> 
  )
}

export default Course;