import React, {useEffect, useState} from 'react';
import classes from './Stars.module.scss';

export const Stars = (props) => {
  
  const [style , setStyle] = useState({});

  let sizeClass = classes.xs;
  switch (props.size) {
  	case 'xs':
  		sizeClass = classes.xs;
  		break;
  	case 'xl':
  		sizeClass = classes.xl;
  		break;
  	case 'm':
  		sizeClass = classes.m;
  		break;
  	default:
  		sizeClass = classes.xs;
  		break;
  }

  useEffect(() => {

    var transition = `transform 1s ease-in-out`;
    var timeoutSec = 250;
    if(props.isAnswered)
    {
      transition = `none`;
      timeoutSec = 0;
    }

    var timeout1 = setTimeout(() =>{
      setStyle({ transition: transition, transform: `translate(${props.posx}px, ${props.posy}px)` });
    },timeoutSec);

    return () => {
      clearTimeout(timeout1);
    };
  
  }, []);

  return (
    <div className={[classes.Stars, sizeClass].join(' ')} style={style}></div>
  );

};

export default Stars;

