import React, {useState, useEffect} from 'react';
import classes from './WrongAnswer.module.scss';

export const WrongAnswer = (props) => {
  
  const [wrongClass, setWrongClass] = useState([classes.WrongScreen])
  
  
  useEffect(() => {

  const timeout1 = setTimeout(() => {
		  setWrongClass([classes.WrongScreen, classes.WrongDiminish]);
	  }, 2000);

	const timeout2 = setTimeout(() => {
		props.retryAnswer();
	}, 3000);

  return () => {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
  };

  }, []);
  

  const retryAnswer = () => {
  	props.retryAnswer();
  }

  return (
    <div className={wrongClass.join(' ')}>
         <div className={classes.WrongSign} onClick={() => props.retryAnswer()}>Wrong</div>
    </div>
  );

};

export default WrongAnswer;

