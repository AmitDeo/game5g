import React, { useState, useEffect } from 'react';

import SingleCard from './SingleCard/SingleCard';

import classes from './GCards.module.scss';

export const GCards = (props) => {
  
  const [currentGCard, setCurrentGCard] = useState('1G');

  const [gcards, setGCards] = useState(['1G', '2G', '3G', '4G', '5G']);

  useEffect(() => {
  	
  	if(props.location.cardname)
  	{
  		setCurrentGCard(props.location.cardname);
  	}

  },[props.location.cardname, setCurrentGCard]); 

  const closeCardCarausel = (event)=> {
  	event.preventDefault();
 	
 	props.history.push({
		pathname: '/quiz'
	});

  };


  const jumptoCard = (event, index)=> {
  	event.preventDefault();
  	setCurrentGCard(index);
  };

  const arrowtoCard = (selectedCard, nextCard)=> {
  	if(nextCard)
  	{
  		switch (selectedCard)
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
  		switch (selectedCard)
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

  	setCurrentGCard(nextCard);

  };

  const onSwipe = (cardId) => {
  	setCurrentGCard(cardId);
  }; 

  let selectorDots = null;
	  const dotLi = gcards.map((feature,index) => (
				<li 
					key={index}
					className={currentGCard === feature ? classes.ActiveDot : ''}>
					<a href="#" onClick={(e) => jumptoCard(e,feature)}>
						{feature}
					</a>
				</li>
	   ));

	selectorDots = (
					<ul className={classes.SelectorDots}>
						{dotLi}
					</ul>
				);


  return (
    <div className={classes.CardCarausel}>
    	<span className={classes.CloseCarausel} onClick={(event) => closeCardCarausel(event)}>Close</span>
    	<SingleCard cardname={currentGCard} onSwipe={(cardId) => onSwipe(cardId)}/>
    	{selectorDots}
    	{currentGCard !== '1G' && <span className={classes.LeftArrow} onClick={() => arrowtoCard(currentGCard)}>Left</span> }
		{currentGCard !== '5G' && <span className={classes.RightArrow} onClick={() => arrowtoCard(currentGCard, true )}>Right</span> }
    </div>
  );

};

export default GCards;
