import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {isIE, isMobile} from "react-device-detect";

import * as quizBuilderActions from '../../store/actions/index'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Aux/Aux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios';
import * as quizActions from '../../store/actions/index'
import classes from './LandingScreen.module.scss';
import Button from '../../components/UI/Button/Button';
import splacImg from '../../assets/images/card-animation.gif';
import splacImgDesktop from '../../assets/images/card-animation-desktop.gif';


const LandingScreen = props => {

	const [isAdvanced, setIsadvanced] = useState(false);
	const [switchClass, setSwitchClass] = useState([classes.ModeChanger]);
	
	const dispatch = useDispatch();

	const onInitQuiz = useCallback(() => dispatch(quizBuilderActions.fetchQuestions()), [dispatch]);

	useEffect(() => {
		onInitQuiz();
	}, [onInitQuiz]);

	const toggleAdvancedMode = () => {
		
		if(!isAdvanced)
		{
			setSwitchClass([classes.ModeChanger, classes.On]);
		}
		else
		{
			setSwitchClass([classes.ModeChanger]);
		}

		setIsadvanced(!isAdvanced);
		dispatch(quizActions.advancedMode())
	};

	const playHandler = () => {
		props.history.push({
			pathname: '/instructions'
		});
	};

	/*
	<div className={classes.Invisible}>
					<div className={switchClass.join(' ')} onClick={toggleAdvancedMode}>
						<span></span>
					</div>
					<h3>Advanced Mode: {isAdvanced ? 'ON' : 'OFF' }</h3>
				</div>
	*/
	
	return (
		<div className={classes.LandingDad}>
			<Toolbar hideCounter={true} />
			<div className={isIE ? [classes.LandingScreen, classes.IEScreen ].join(' ') : classes.LandingScreen }>
				<h1>Think You<br/> Know Wireless?</h1>
				<p>Show off your smarts on each of the five wireless generations.</p>
				<div className={classes.LandingSplash}>
					<img src={isMobile ? splacImg : splacImgDesktop } /> 
				</div>
				<Button btnType="PulseBtn" clicked={playHandler}>Play Now</Button>
			</div>
		</div>
	);
}

export default withErrorHandler(LandingScreen, axios);


