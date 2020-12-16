import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {isIE} from "react-device-detect";

import * as quizBuilderActions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/Modal/Modal';
import * as quizActions from '../../store/actions/index';
import { minsecTextFormat } from '../../shared/utility';
import Aux from '../../hoc/Aux/Aux';

import classes from './ResultScreen.module.scss';


const ResultScreen = props => {
	
	
	const [switchClass, setSwitchClass] = useState([classes.ModeChanger]);
	const dispatch = useDispatch();
	const [congratsText, setCongratsText] = useState(['Very Nice']);
	const [showVid, setShowVid] = useState(false);
	const [videoContent, setVideoContent] = useState('');

	const starttime =  useSelector( state => {
		return state.quizBuilder.starttime;
	});

	const endtime =  useSelector( state => {
		return state.quizBuilder.endtime;
	});

	const missed =  useSelector( state => {
		return state.quizBuilder.missed;
	});

	const isAdvanced =  useSelector( state => {
		return state.quizBuilder.isAdvanced;
	});

	const onGameFinish = useCallback(() => dispatch(quizBuilderActions.finishGame()), []);
	
	useEffect(() => {
		onGameFinish();
	},[onGameFinish]);

	useEffect(()=>{
		if(isAdvanced)
		{
			setSwitchClass([classes.ModeChanger, classes.On]);
		}
		else
		{
			setSwitchClass([classes.ModeChanger]);
		}

		var percentage = 0;

		if(isAdvanced)
		{
			percentage = 100*(10 - +missed)/10;
		}	
		else
		{
			percentage = 100*(5 - +missed)/5;
		}

		
		if(percentage >= 95)
		{
			setCongratsText('Exceptional Job');	
		}
		else if(percentage >= 80 && percentage < 95)
		{
			setCongratsText('Very Nice');
		}
		else if(percentage < 80 && percentage >= 50)
		{
			setCongratsText('You can do better');
		}
		else
		{
			setCongratsText('Keep Trying')
		}

	}, [isAdvanced, missed]);

	const toggleAdvancedMode = () => {
		
		if(isAdvanced)
		{
			setSwitchClass([classes.ModeChanger, classes.On]);
		}
		else
		{
			setSwitchClass([classes.ModeChanger]);
		}

		dispatch(quizActions.advancedMode());

	};

	const reStartHandler = () => {
		props.history.push({
			pathname: '/'
		});
	};

	const playHandler = (event) => {
		showPopup(event, 'https://player.vimeo.com/video/458216514?width=640&height=480&iframe=true&autoplay=1?autoplay=1');
	};

	const closePopup = () => {
		setShowVid(false);
		setVideoContent('');
	}

	const showPopup = (event, videoUrl) => {
		event.preventDefault();
		setShowVid(true);
		setVideoContent(videoUrl);
	}


	return (
		<Aux>
			<div className={isIE ? [classes.ResultScreen, classes.IEScreen ].join(' ') : classes.ResultScreen}>
				<h1>{congratsText}</h1>
				<p>You missed {missed} items in {minsecTextFormat(Math.floor((endtime-starttime)/1000))}. Watch the video below if you would like a refresher.</p>
				<Button btnType="Play" clicked={(event)=>showPopup(event, 'https://player.vimeo.com/video/458216514?width=640&height=480&iframe=true&autoplay=1?autoplay=1')}>5G Explained</Button>
				<div className={classes.Invisible}>
					<div className={switchClass.join(' ')} onClick={toggleAdvancedMode}>
						<span></span>
					</div>
					<h3>Advanced Mode: {isAdvanced ? 'ON' : 'OFF' }</h3>
				</div>
				<div className={classes.LastBtn}>
					<Button btnType="Success" clicked={reStartHandler}>Play Again</Button>
				</div>
			</div>
			<Modal show={showVid} modalClosed={closePopup}>
					<iframe 
						src={videoContent}
						allow="autoplay; fullscreen" 
						allowFullScreen
						className={classes.IframeClass} 
						frameBorder="0">
					</iframe>
			</Modal>
		</Aux>
	);

};

export default ResultScreen;