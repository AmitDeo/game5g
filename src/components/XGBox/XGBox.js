import React, { useEffect, useState } from 'react'

import CongratsScreen from '../CongratsScreen/CongratsScreen';
import WrongAnswer from '../WrongAnswer/WrongAnswer';
import classes from './XGBox.module.scss';

export const XGBox = (props) => {
  
  const [xgClass, setXgClass] = useState([classes.Graphic]);
  const [bottomText, setBottomText] = useState('');
  const [bottomYear, setBottomYear] = useState('');

  useEffect(() => {

  	switch(props.droppedID){
  		case '1G':
        setXgClass([classes.Graphic, classes.Graphic1G]);
        setBottomText('Analog');
        setBottomYear("1980's");
        break;
      case '2G':
        setXgClass([classes.Graphic, classes.Graphic2G]);
        setBottomText('Digital');
        setBottomYear("1990's");
        break;
      case '3G':
        setXgClass([classes.Graphic, classes.Graphic3G]);
        setBottomText('Digital (CDMA)');
        setBottomYear("2000's");
        break;
      case '4G':
        setXgClass([classes.Graphic, classes.Graphic4G]);
        setBottomText('LTE');
        setBottomYear("2010's");
        break;
      case '5G':
        setXgClass([classes.Graphic, classes.Graphic5G]);
        setBottomText('NR');
        setBottomYear('2019');
        break;
      default:
        setXgClass([classes.Graphic, classes.Graphic5G]);
        setBottomText('NR');
        setBottomYear('2019');
        break;
  	}
  },[props.droppedID]);

  return (
    <div className={classes.XGBox}>
         <div className={classes.InnerBox}>
         	<h2>{props.droppedID}</h2>
         	<div className={xgClass.join(' ')}></div>
         	<h3>{bottomText}</h3>
         	<h4>{bottomYear}</h4>
          {props.isCorrect ? <CongratsScreen isAnswered={props.wasAnsweredOnLoad && !props.wasAnsweredOnLoadIncorrect} /> : null}
         	{!props.isCorrect ? <WrongAnswer retryAnswer={() => props.reTryAnswer()} /> : null }
         </div> 
    </div>
  );

};

export default XGBox;

