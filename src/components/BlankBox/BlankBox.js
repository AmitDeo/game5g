import React from 'react';
import classes from './BlankBox.module.scss';

export const BlankBox = (props) => {
  
  return (
    <div className={ props.isActive ? [classes.BlankBox, classes.ActiveBox].join(' ') : classes.BlankBox }>
         <div className={classes.InnerBox}>
         	<h3>Drag Here</h3>
         </div> 
    </div>
  );

};

export default BlankBox;

