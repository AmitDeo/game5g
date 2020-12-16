import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './SingleCard.module.scss';
import * as quizBuilderActions from '../../../store/actions/index'

export const SingleCard = (props) => {
  
  const singleCardRef = useRef(null);

  const [xgClass, setXgClass] = useState([classes.Graphic]);
  const [bottomText, setBottomText] = useState('');
  const [bottomYear, setBottomYear] = useState('');
  const dispatch = useDispatch();

  const swipeState = useSelector(state => {
		return state.quizBuilder.swipeState;
  });

  useEffect(() => {

  	switch(props.cardname){
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


  },[props.cardname, singleCardRef.current]);

  const animateSlidingToZero = () => {
    let {left, velocity, beingTouched} = swipeState;
    if (!beingTouched && left < -0.01) {
      velocity += 10 * 0.033;
      left += velocity;
      if (left < -350) {
        window.clearInterval(swipeState.intervalId);
        handleRemoveSelf();
      }
      dispatch(quizBuilderActions.updateSwipe({
			...swipeState,
      		left: left, 
      		velocity: velocity
		}));

    } else if (!beingTouched) {

      left = 0;
      velocity = 0;
      window.clearInterval(swipeState.intervalId);

      dispatch(quizBuilderActions.updateSwipe({
      		...swipeState,
      		left: left, 
      		velocity: velocity, 
      		intervalId: null, 
      		originalOffset: 0
      	}
     ));

    }
  }
  
  const getNextCard = (isNext)=> {
  	let nextCard = false;

  	if(isNext)
  	{
  		switch (props.cardname)
	  	{
	  		case '1G':
	  			nextCard = '2G';
	  			break;
	  		case '2G':
	  			nextCard = '3G';
	  			break;
	  		case '3G':
	  			nextCard = '4G';
	  			break;
	  		case '4G':
	  			nextCard = '5G';
	  			break;
	  		case '5G':
	  			nextCard = '1G';
	  			break;
	  		default:
	  			nextCard = '1G';
	  			break;
	  	}
  	}
  	else
  	{
  		switch (props.cardname)
	  	{
	  		case '1G':
	  			nextCard = '5G';
	  			break;
	  		case '2G':
	  			nextCard = '1G';
	  			break;
	  		case '3G':
	  			nextCard = '2G';
	  			break;
	  		case '4G':
	  			nextCard = '3G';
	  			break;
	  		case '5G':
	  			nextCard = '4G';
	  			break;
	  		default:
	  			nextCard = '1G';
	  			break;
	  	}
  	}

  	return nextCard;

  };

  const handleRemoveSelf = (isNext) => {
    dispatch(quizBuilderActions.updateSwipe({
	    		...swipeState,
	    		left: 0
	    }
    ));

    window.setTimeout(() => props.onSwipe(getNextCard(isNext)), 250);
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
        handleRemoveSelf(true);
      } else if (deltaX > 50) {
        handleRemoveSelf(false);
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
      intervalId: window.setInterval(animateSlidingToZero(), 33)
    }));
  }
  
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
    handleMouseUp();
  }
  
	


  return (
    <div 
    	className={classes.SingleCard}
    	ref={singleCardRef}
    	  onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
        // The following event handlers are for mouse compatibility:
        onMouseDown={mouseDownEvent => handleMouseDown(mouseDownEvent)}
        onMouseMove={mouseMoveEvent => handleMouseMove(mouseMoveEvent)}
        onMouseUp={() => handleMouseUp()}
        onMouseLeave={() => handleMouseLeave()}
    >
    	<div 
    		className={classes.InnerBox}
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
          <div className={classes.TitleText}>
         	  <h2 style={props.cardname == '5G' ? {opacity: 0} : {opacity: 1}}>{props.cardname}</h2>
          </div>
          <div className={classes.GraphicContainer}>
         	  <div className={xgClass.join(' ')}></div>
          </div>
          <div className={classes.BottomText}>
         	  <h3>{bottomText}</h3>
         	  <h4>{bottomYear}</h4>
          </div>
         </div> 
    </div>
  );
};

export default SingleCard;

