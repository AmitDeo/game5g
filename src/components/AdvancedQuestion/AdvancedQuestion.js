import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './AdvancedQuestion.module.scss';

import { addClassElement } from '../../shared/utility';
import * as quizBuilderActions from '../../store/actions/index';

const AdvancedQuestion = (props) => {

	const [userCurrentAnswer, setUserCurrentAnswer ] = useState(false);
	const [userCurrentAnswerIdx, setuserCurrentAnswerIdx ] = useState(null);

	const dispatch = useDispatch();
/*
	const swipeState = useSelector(state => {
		return state.quizBuilder.swipeState;
	});
*/

	const currentQuestion = useSelector(state => {
		return state.quizBuilder.currentQuestion;
	});


	useEffect(() => {
		/*dispatch(quizBuilderActions.updateSwipe({
			      left: 0,
			      originalOffset: 0,
			      velocity: 0,
			      timeOfLastDragEvent: 0,
			      touchStartX: 0,
			      prevTouchX: 0,
			      beingTouched: false,
			      height: 0,
			      intervalId: null
		}));
		*/

		if(props.advQuestion.userAdvAnswer !== null)
		{
			if(+props.advQuestion.options[+props.advQuestion.userAdvAnswer].is_correct === 1)
			{
				setTimeout(()=> {
					props.loadNextFromAdvanced();
				},4000);
			}	
		}
		
	},[props.advQuestion, props.loadNextFromAdvanced]);




	const advancedHandler = (event, ans) => {

		const checkbox = event.target.checked;
		const parentElement = event.target.parentElement;
		
		setUserCurrentAnswer(true);
		setuserCurrentAnswerIdx(ans);

		if(checkbox)
		{
			if(+props.advQuestion.options[+ans].is_correct === 1)
			{
				addClassElement(parentElement, classes.RightAnswer);
				props.clickHandler(ans, true);	
				//Redirect to next question after 2500 sec is taken care by parent handler.
			}
			else
			{
				addClassElement(parentElement, classes.WrongAnswer);
				props.clickHandler(ans, false);
			}	
		}
	};

	const advancedHandler2 = (event, ans) => {

		
		document.getElementById('checkbox_'+ans).checked = true;

		setUserCurrentAnswer(true);
		setuserCurrentAnswerIdx(ans);

		console.log('Advanced Answer' + ans);

		//if(checkbox)
		//{
			if(+props.advQuestion.options[+ans].is_correct === 1)
			{
				addClassElement(event.target, classes.RightAnswer);
				props.clickHandler(ans, true);	
				//Redirect to next question after 2500 sec is taken care by parent handler.
			}
			else
			{
				addClassElement(event.target, classes.WrongAnswer);
				props.clickHandler(ans, false);
			}	
		//}
	};


	let advOptions = null;
	
	let isAnsweredCorrect = false; 

	if(props.advQuestion.userAdvAnswer)
	{
		isAnsweredCorrect = props.advQuestion.options[props.advQuestion.userAdvAnswer].is_correct ? true : false;
	}	

	advOptions = props.advQuestion.options.map((advqsn, index) => {

		
		const checked = props.advQuestion.isAdvAnswered && props.advQuestion.userAdvAnswer === index 
			? <input id={'checkbox_'+index} disabled={props.advQuestion.isAdvAnswered || userCurrentAnswer ? true : false } type="checkbox" checked="checked"  onChange={(e) => advancedHandler(e, index)} name="advancedquestion" value={index} /> 
			: <input  id={'checkbox_'+index} disabled={props.advQuestion.isAdvAnswered || userCurrentAnswer ? true : false } type="checkbox"  onChange={(e) => advancedHandler(e, index)} name="advancedquestion" value={index} /> ;

		return (<li 
				key={index} 
				onClick={(e) => advancedHandler2(e, index)} 
				className={
				props.advQuestion.isAdvAnswered || (userCurrentAnswer)
					? +advqsn.is_correct === 1 
						? classes.RightAnswer 
						: (props.advQuestion.isAdvAnswered && props.advQuestion.userAdvAnswer === index) 
							|| (userCurrentAnswer && userCurrentAnswerIdx === index) ? classes.WrongAnswer : [classes.WrongAnswer, classes.NoIcon].join(' ')
					: ''
				}>
			{checked}
			<div dangerouslySetInnerHTML={{__html: advqsn.body }}></div>
			<span></span>
		</li>);
	});

/*
	  const handleRemoveSelf = (nextQsn, isNext) => {
	    dispatch(quizBuilderActions.updateSwipe({
		    		...swipeState,
		    		left: 0
		    }
	    ));

	    window.setTimeout(
	    	() => {
	    	
	    	if(props.isLastQuestion && isNext)
	    	{
	    		dispatch(quizBuilderActions.updateSwipe({
		    		...swipeState,
		    		beingTouched: false,
	      			intervalId: null,
		    		left: 0
		    	}));
		    	return false;
	    	}

	    	props.gotoQuestion(nextQsn, isNext);

	    }
	    , 250);
	  }
	  

	  const handleStart = (clientX) => {
	  	
	    if (swipeState.intervalId !== null) {
	      window.clearInterval(swipeState.intervalId);
	    }

	    dispatch(quizBuilderActions.updateSwipe({
	      ...swipeState,	
	      timeOfLastDragEvent: Date.now(),
	      touchStartX: clientX,
	      beingTouched: true,
	      intervalId: null
	    }));

	  };
	  
	  const handleMove = (clientX) => {
	  	
	    if (swipeState.beingTouched) {
	      const touchX = clientX;
	      const currTime = Date.now();
	      const elapsed = currTime - swipeState.timeOfLastDragEvent;
	      const velocity = 20 * (touchX - swipeState.prevTouchX) / elapsed;
	      let deltaX = touchX - swipeState.touchStartX + swipeState.originalOffset;
	      
	      if (deltaX < -100) {
	      	handleRemoveSelf(+currentQuestion+1, true);
	      } else if (deltaX > 100) {
	       	handleRemoveSelf(+currentQuestion-1, false); 
	      }

	      dispatch(quizBuilderActions.updateSwipe({
	      	...swipeState,
	        left: deltaX,
	        velocity,
	        timeOfLastDragEvent: currTime,
	        prevTouchX: touchX
	      }));
	    }
	  }
	 
	  const handleEnd = () => {
	  	
	  	dispatch(quizBuilderActions.updateSwipe({
	      ...swipeState,	
	      touchStartX: 0,
	      beingTouched: false,
	      intervalId: null //setInterval(() => animateSlidingToZero(), 1000)
	    }));
		
	  };
	  

	  const handleTouchStart = (touchStartEvent) => {
	    touchStartEvent.preventDefault();
	    handleStart(touchStartEvent.targetTouches[0].clientX);
	  }
	  
	  const handleTouchMove = (touchMoveEvent) => {
	    handleMove(touchMoveEvent.targetTouches[0].clientX);
	  }
	  
	  const handleTouchEnd = () => {
	  	handleEnd();
	  }
	  
	  const handleMouseDown  = (mouseDownEvent) => {
	    mouseDownEvent.preventDefault();
	    handleStart(mouseDownEvent.clientX);
	  }
	  
	  const handleMouseMove = (mouseMoveEvent) => {
	    handleMove(mouseMoveEvent.clientX);
	  }
	  
	  const handleMouseUp = () => {
	  	handleEnd();
	  }
	  
	  const handleMouseLeave = () => {
	    //handleMouseUp();
	  }
*/

	return (
		<div 
			className={classes.AdvancedQuestion}
			/*
			// Event handlers for touch
			onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
			onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
			onTouchEnd={() => handleTouchEnd()}
			// The following event handlers are for mouse compatibility:
			onMouseDown={mouseDownEvent => handleMouseDown(mouseDownEvent)}
			onMouseMove={mouseMoveEvent => handleMouseMove(mouseMoveEvent)}
			onMouseUp={() => handleMouseUp()}
			onMouseLeave={() => handleMouseLeave()}
			style={
			!swipeState.beingTouched ? 
			{
				position: 'relative',
				left: swipeState.left,
				transition: 'all 250ms ease'
			}
			:
			{
				position: 'relative',
				left: swipeState.left
			}
			
			}*/
		>
			<div className={classes.AdvTitle} dangerouslySetInnerHTML={{__html: props.advQuestion.title }}></div>
			<ul>
				{advOptions}
			</ul>
		</div>
	);
};

export default AdvancedQuestion;