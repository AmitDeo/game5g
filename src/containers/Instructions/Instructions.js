import React from 'react';
import { useDispatch } from 'react-redux';
import * as quizBuilderActions from '../../store/actions/index'
import {isIE} from "react-device-detect";

import classes from './Instructions.module.scss';
import Button from '../../components/UI/Button/Button';
import onBoarding from '../../assets/images/onboarding.png';
import onBoarding_drag from '../../assets/images/onboarding_drag2.png';

const Instructions = (props) => {

	const dispatch = useDispatch();

	const playHandler = () => {

		dispatch(quizBuilderActions.startGame());
		
		props.history.push({
			pathname: '/quiz'
		});
	};

	return (
		<div className={isIE ? [classes.InstructionsScreen, classes.IEScreen ].join(' ') : classes.InstructionsScreen }>
			<div className={classes.swipeFeatures}>
				<div className={classes.swipeStep1}> STEP 1</div>
				<div className={classes.swipeIllustrate}>
					<div className={classes.swipeImg}>
						<img src={onBoarding_drag} alt="Drag the corresponding Generation card onto the matching features"/>
					</div>
					<div className={classes.swipeText}>
						Match the cards correctly to learn what each "G" enabled us to do with our devices.
					</div>
				</div>
			</div>
			<div className={classes.swipeFeatures}>
				<div className={classes.swipeStep2}>STEP 2</div>
				<div className={classes.swipeIllustrate}>
					<div className={classes.swipeImg}>
						<img src={onBoarding} alt="Swipe Left/Right to explore features"/>
					</div>
					<div className={classes.swipeText}>
						Swipe Left/Right to explore features
					</div>
				</div>
			</div>
			<Button btnType="PulseBtn" clicked={playHandler}>Start Playing</Button>
		</div>
	);
};

export default Instructions;
