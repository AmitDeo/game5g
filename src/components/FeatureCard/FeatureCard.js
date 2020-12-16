import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemTypes } from '../../constants/constants';
import classes from './FeatureCard.module.scss';
import { useDrop } from 'react-dnd';
import BlankBox from '../BlankBox/BlankBox';
import XGBox from '../XGBox/XGBox';
import * as quizBuilderActions from '../../store/actions/index';


const FeatureCard = (props) => {

	const [cssStyle, setCssStyle] = useState({});
	const [classDropBox, setClassDropBox] = useState([classes.DropBox]);

	const [dropped, setDropped] = useState(false);

	const [isCorrect, setIsCorrect] = useState(false);
	const [droppedID, setDroppedID] = useState(false);

	const dispatch = useDispatch();

	const currentQuestion = useSelector(state => {
		return state.quizBuilder.currentQuestion;
	});
	
	const swipeState = useSelector(state => {
		return state.quizBuilder.swipeState;
	});
	
	useEffect(() => {
		if(currentQuestion !== 0)
		{
			setClassDropBox([classes.DropBox, classes.Diminish]);
		}

		var timeout1 = setTimeout(() => {
			setClassDropBox([classes.DropBox, classes.Appear]);
		}, 350);

		return () => {
			clearTimeout(timeout1);
		}
		
	}, [currentQuestion]);

	useEffect(() => {

		if(!props.isCurrentAnswered || (props.wasAnsweredOnLoadIncorrect && !props.isDragged))
		{
			setDropped(false);
		}
		else
		{
			setDropped(true);
			var lastDropped = props.droppedCards;
			setDroppedID(lastDropped);
			
			if(lastDropped === props.answerID)
			{
				setIsCorrect(true);
			}
			else
			{
				setIsCorrect(false);
			}
		}

		dispatch(quizBuilderActions.updateSwipe({
			      left: 0,
			      originalOffset: 0,
			      velocity: 0,
			      timeOfLastDragEvent: 0,
			      touchStartX: 0,
			      prevTouchX: 0,
			      beingTouched: false,
			      height: 110,
			      intervalId: null
		}));

	}, [currentQuestion, props.isCurrentAnswered, props.droppedCards, props.wasAnsweredOnLoadIncorrect ]) 

	/*
	const animateSlidingToZero = () => {
	    let {left, velocity, beingTouched, intervalId} = swipeState;
	    let isNext = false;
	    
	    if(left < 0)
	    {
	    	isNext = true;
	    }

	    if (!beingTouched && !(left > -0.01 && left < 0.01)) {
	      console.log('I should not be here');
	      velocity += 10 * 0.033;
	      left += isNext ? velocity : -velocity;

	      if (left < -150
	      	  &&
	      	  !(
	      	  	(props.isLastQuestion && !props.isAdvanced && isNext) || 
	      	  	(props.isLastQuestion && props.isAdvanced && props.isAdvancedOn && isNext)	
	      	  )	
	      	) 
	      {
	      	console.log('Removing handle 1');
	      	window.clearInterval(intervalId);
	      	handleRemoveSelf(+currentQuestion+1, true);
	      } else if (left > 150 && !props.isFirstQuestion) {
	      	console.log('Removing handle 2');
	      	window.clearInterval(intervalId);
	       	handleRemoveSelf(+currentQuestion-1, false); 
	      }

	      dispatch(quizBuilderActions.updateSwipe({
				...swipeState,
	      		left: left, 
	      		velocity: velocity
			}));

	    } else if (!beingTouched) {

	      console.log('Coming here straight');	

	      left = 0;
	      velocity = 0;
	      window.clearInterval(intervalId);

	      dispatch(quizBuilderActions.updateSwipe({
	      		...swipeState,
	      		left: left, 
	      		velocity: velocity, 
	      		intervalId: null, 
	      		originalOffset: 0
	      	}
	     ));

	    }

	};
	*/

	  const handleRemoveSelf = (nextQsn, isNext) => {
	    dispatch(quizBuilderActions.updateSwipe({
		    		...swipeState,
		    		left: 0
		    }
	    ));

	    window.setTimeout(
	    	() => {
	    	
	    	if(props.isFirstQuestion && !isNext)
	    	{
	    		dispatch(quizBuilderActions.updateSwipe({
		    		...swipeState,
		    		beingTouched: false,
	      			intervalId: null,
		    		left: 0
		    	}));
		    	return false;
	    	}

	    	if(
	    		(props.isLastQuestion && !props.isAdvanced && isNext) || 
	      	  	(props.isLastQuestion && props.isAdvanced && props.isAdvancedOn && isNext)	
	      	  )
	    	{
	    		dispatch(quizBuilderActions.updateSwipe({
		    		...swipeState,
		    		beingTouched: false,
	      			intervalId: null,
		    		left: 0
		    	}));
		    	return false;
	    	}

	    	if(!props.isFirstQuestion || (props.isFirstQuestion && props.isAdvancedOn))
	    	{
		       		props.gotoQuestion(nextQsn, isNext);
		       		return false;
		    }
		       
		    if(!props.isLastQuestion || (props.isLastQuestion && props.isAdvanced && !props.isAdvancedOn))
		    {
		       		props.gotoQuestion(nextQsn, isNext);
		       		return false;
		    }
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
	      
	      if (deltaX < -50) {
	      	handleRemoveSelf(+currentQuestion+1, true);
	      } else if (deltaX > 50) {
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
	      intervalId: null 
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
	  

	let myself = useRef(null);

	const handleDrop = (item, monitor) => {

		//Handle Drop here
		setDropped(true);
		setDroppedID(item.name);
		
		if(item.name === props.answerID)
		{
			setIsCorrect(true);
		}
		else
		{
			setIsCorrect(false);
		}

		props.handleDrop(item, monitor);
	};

	const [{ isOver, canDrop }, drop] = useDrop({
	    accept: ItemTypes.CARD,
	    canDrop: (item, monitor) => !(dropped && !props.wasAnsweredOnLoadIncorrect),
	    drop: (item, monitor) => handleDrop(item, monitor),
	    collect: (monitor) => ({
	      isOver: !!monitor.isOver(),
	      canDrop: !!monitor.canDrop()
	    }),
	});

	const reTryHandler = () => {
		props.unHandleDrop();
		setDropped(false);
	};

	return (
		<div 
			ref={myself} 
			style={cssStyle}
			// Event handlers for touch
			onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
			onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
			onTouchEnd={() => handleTouchEnd()}
			// The following event handlers are for mouse compatibility:
			onMouseDown={mouseDownEvent => handleMouseDown(mouseDownEvent)}
			onMouseMove={mouseMoveEvent => handleMouseMove(mouseMoveEvent)}
			onMouseUp={() => handleMouseUp()}
			onMouseLeave={() => handleMouseLeave()}
			className={props.isIOS ? [classes.FeatureMainScreen, classes.IOSDevice].join(' ') : classes.FeatureMainScreen}
		>
			<div 
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
				}
			>
				<div ref={drop} className={classDropBox.join(' ') }>
					<div className={canDrop || (dropped && !props.wasAnsweredOnLoadIncorrect) ? [props.cssClass, classes.SqueezeClass].join(' ') : props.cssClass }>
						{props.children}
					</div>
				  {isOver && !canDrop && !(dropped && !props.wasAnsweredOnLoadIncorrect) && <BlankBox />}
			      {!isOver && canDrop && !(dropped && !props.wasAnsweredOnLoadIncorrect) &&  <BlankBox/>}
			      {isOver && canDrop && !(dropped && !props.wasAnsweredOnLoadIncorrect) && <BlankBox  isActive={true} />}
			      {((dropped && !props.wasAnsweredOnLoadIncorrect) || (dropped && props.isDragged)) && <XGBox 
			      					dropped={dropped} 
			      					isCorrect={isCorrect} 
			      					isAnswered={props.isCurrentAnswered}
			      					wasAnsweredOnLoad={props.wasAnsweredOnLoad}
			      					wasAnsweredOnLoadIncorrect={props.wasAnsweredOnLoadIncorrect} 
			      					droppedID={droppedID} 
			      					answer={props.answerID}  reTryAnswer = {() => reTryHandler()} 
			      				/>
			      		}
				</div>
			</div>
		</div>
	);

};

export default FeatureCard;