import React from "react";
import bemCssModules from 'bem-css-modules';

import { default as CoursesStyles } from './Course.module.scss';

const block = bemCssModules(CoursesStyles);

const Course = ({ authors, img, price, title }) => {
  const allAuthors = authors.join(',');
  return(
    <li>
      <article className={block()}>
        <h3 className={block('title')}></h3>
        <img className={block('image')} src="https://picsum.photos/200/150" alt={title} />
        <p className={block('price')}>{`Koszt kursu: ${price}dollar`}</p>
        <p className={block('authors')}>{`Authorzy kursu ${allAuthors}`}</p>
      </article>
    </li> 
  )
}

export default Course;