import React, { useEffect, useState, memo } from 'react'

import classes from './AnswerCardPreview.module.scss';

export const AnswerCardPreview = memo(({ title }) => {
  
  return (
    <div className={classes.DraggedCard}>
         <span>{title}</span>       
    </div>
  );

})

export default AnswerCardPreview;

