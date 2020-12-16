import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'
import { isMobile, isIOS, isIE } from "react-device-detect";
import { usePreview } from 'react-dnd-preview';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import AdvancedQuestion from '../../components/AdvancedQuestion/AdvancedQuestion';

import classes from './QuizBuilder.module.scss';
import * as quizBuilderActions from '../../store/actions/index'
import card_1g from '../../assets/images/card_1g.png';
import card_2g from '../../assets/images/card_2g.png';
import card_3g from '../../assets/images/card_3g.png';
import card_4g from '../../assets/images/card_4g.png';
import card_5g from '../../assets/images/card_5g.png';

const QuizBuilder = (props) => {

	
	const [question, setQuestion] = useState([]);
	const [lastDroppedCard, setLastDroppedCard] = useState();
	const [isGameOverDelayed, setIsGameOverDelayed] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const [answerCards, setAnswerCards] = useState([
			{id: '1G', name: '1G', preview: card_1g},
			{id: '2G', name: '2G', preview: card_2g},
			{id: '3G', name: '3G', preview: card_3g},
			{id: '4G', name: '4G', preview: card_4g},
			{id: '5G', name: '5G', preview: card_5g}
		]);

	const [advQuestion, setAdvQuestion] = useState([]);
	const [answer, setAnswer] = useState(false);
	const [advAnswer, setAdvAnswer] = useState(false);
	const [isAdvancedOn, setIsAdvancedOn] = useState(false);
	const [result, setResult] = useState(false);
	const [isCurrentAnswered, setIsCurrentAnswered] = useState(false);
	const [wasAnsweredOnLoad, setWasAnsweredOnLoad] = useState(false);
	const [isFirstQuestion, setIsFirstQuestion] = useState(false);
	const [gameOverText, setGameOverText] = useState('You answered all questions. Please click to continue!');

	const dispatch = useDispatch();

	const questions = useSelector(state => {
		return state.quizBuilder.questions;
	});

	const currentQuestion = useSelector(state => {
		return state.quizBuilder.currentQuestion;
	});

	const isAdvanced = useSelector(state => {
		return state.quizBuilder.isAdvanced;
	});

	const isLastQuestion = useSelector(state => {
		return state.quizBuilder.isLastQuestion;
	});
	
	const attempts = useSelector(state => {
		return state.quizBuilder.attempts;
	});

	const isGameOver = useSelector(state => {
		return state.quizBuilder.isGameOver;
	});

	useEffect(() => {
		
		if(typeof questions[currentQuestion] !== 'undefined')
		{
			currentQuestion === 0 ? setIsFirstQuestion(true) : setIsFirstQuestion(false);

			setQuestion(questions[currentQuestion].main_options);
			setAnswer(questions[currentQuestion].answer);
			setAdvQuestion({
				'title': questions[currentQuestion].advanced_title,
				'options': questions[currentQuestion].advanced_options,
				'isAdvAnswered': questions[currentQuestion].isAdvAnswered,
				'userAdvAnswer': questions[currentQuestion].userAdvAnswer
			});

			
			setResult(false);
			setAdvAnswer(false);
			setIsAdvancedOn(false);
			setIsDragging(false);
			setIsCurrentAnswered(questions[currentQuestion].isAnswered);
			setLastDroppedCard(questions[currentQuestion].userAnswer);
			setWasAnsweredOnLoad(questions[currentQuestion].isAnswered);
		}
		else
		{
			//No questions loaded so push to homepage
			props.history.push({
				pathname: '/'
			});

			
		}
	}, [questions, currentQuestion, props.history]);
	
	useEffect(() => {
			if(isAdvanced && attempts >= 11)
			{
				setGameOverText('You used all your attempts. Please click to conitinue');
			}
			else if(!isAdvanced && attempts >= 6)
			{
				setGameOverText('You used all your attempts. Please click to conitinue');
			}

	}, [attempts]);

	useEffect(() => {
		if(isGameOver === true)
		{
			setTimeout(() => {
				setIsGameOverDelayed(true);
				//{ isGameOverDelayed ? <Backdrop content={gameOverText} show={true} clicked={()=> redirectToResult()} /> : null }
				redirectToResult();
			}, 1500);
		}

	}, [isGameOver]);


	const answerHandler = ans => {
		//Increase the attempt 
		
		
		let isRight = false;

		if(ans === answer){
			isRight = true;
			setResult(true); 
		}
		else
		{
			setResult(false); 	
		}

		dispatch(quizBuilderActions.incrementAttempt(!isRight && 1, currentQuestion, ans));

		if(isAdvanced && isRight)
		{
			advQuestion.options.map((advqsn, index) => {
				if(+advqsn.is_correct === 1 )
				{
					setAdvAnswer(+index);
				}
				return null;
			});

			setTimeout(() => {
				setIsAdvancedOn(true);
			}, 2500);

		}
		else if(isRight)
		{
			if(!isLastQuestion)
			{

				setTimeout(() => {
					dispatch(quizBuilderActions.getQuestion(+currentQuestion+1));
				}, 2500);
			}
			else
			{
				if(!isGameOver)
				{
					setTimeout(() => {
						dispatch(quizBuilderActions.getQuestion(0));
					}, 2500);
				}
			}
			
		}
		return false;
	};

	const redirectToResult = useCallback(() => {
		props.history.push({
				pathname: '/result'
		});

	}, []);

	const seeCardHandler = useCallback((item_name) => {
		
		props.history.push({
				pathname: '/cards',
				cardname: item_name
		});

	}, []);

	const setDragging = () => {
		setIsDragging(true);
	}

	const advancedHandler = (ans, is_correct) => {
		
		dispatch(quizBuilderActions.incrementAdvAttempt(!is_correct, +currentQuestion, ans, is_correct));

		if(isLastQuestion)
		{
			//if(is_correct)
			//{
				if(!isGameOver)
				{
					setTimeout(() => {
						setIsAdvancedOn(false);
						dispatch(quizBuilderActions.getQuestion(0));
					}, 2500);
				}
			//}
		}
		else
		{
			//if(is_correct)
			//{
				setTimeout(() => {
					dispatch(quizBuilderActions.getQuestion(+currentQuestion+1));
				}, 2500);
			//}
		}
	};

	const loadNextFromAdvanced = () => {

			setIsAdvancedOn(false);
			let qsn_id = currentQuestion+1;
			
			if(qsn_id > 4)
			{
				//check if game over
				qsn_id = 0;
			}

			dispatch(quizBuilderActions.getQuestion(qsn_id));	
	}

	const handleDrop  = (item, monitor) => {

		//Remove card from that index
		setIsCurrentAnswered(true);
		setLastDroppedCard(item.name);
		answerHandler(item.name);
	};

	const unHandleDrop = () => {
		setIsCurrentAnswered(false);
		setLastDroppedCard(null);
	};

	const gotoQuestion = (qsn_id, is_forward=false) => {

		if(isFirstQuestion && !is_forward && isAdvanced && isAdvancedOn)
		{
			setIsAdvancedOn(false);
		}
		else if(isAdvanced && !isAdvancedOn && isCurrentAnswered && is_forward)
		{
			setResult(false);
			setIsAdvancedOn(true);	
		}
		else
		{

			if(qsn_id < 0)
			{
				qsn_id = 4;
			}
			else if(qsn_id > 4)
			{
				qsn_id = 0;
			}

			dispatch(quizBuilderActions.getQuestion(qsn_id));	
		}
	}

	const jumptoQuestion = (e, qsn_id) => {
		e.preventDefault();
		dispatch(quizBuilderActions.getQuestion(qsn_id));
	}
		

	let mainQuestion = null;
	let advancedQuestion = null;

	mainQuestion = question.map((feature,index) => {

		var featureBody = +feature.is_advanced && isAdvanced ? <div className={classes.optContent}><span className={classes.QIcon}></span></div> : <div className={classes.optContent} dangerouslySetInnerHTML={{__html: feature.body }}></div>
		if(feature.is_advanced)
		return (
			<div className={classes.eachFeature} key={index}>
				<div className={classes.FeatureIcon}>
					<img src={feature.icon} />
				</div>
				<div className={classes.FeatureBody}>
					<h3>{feature.title}</h3>
					{featureBody}
				</div>
			</div>
		)}
	);

	let selectorDots = null;
	const dotLi = questions.map((feature,index) => (
			<li 
				key={index}
				className={currentQuestion === index ? classes.ActiveDot : ''}>
				<a href="#" onClick={(e) => jumptoQuestion(e,index)}>
					{index}
				</a>
			</li>
		));

	selectorDots = (
							<ul className={classes.SelectorDots}>
								{dotLi}
							</ul>
						);
						
	const MyPreview = () => {
	    const {display, itemType, item, style} = usePreview();

		    if (!display) {
		      return null;
		    }

			return <div className="item-list__item" style={style}><img src={item.previewImage} alt={item.name} /></div>;
		};
	
	let mainQuestionAnswer = (
								<DndProvider backend={isMobile ? TouchBackend : HTML5Backend } >
									<div className={classes.MainQuizQuestion}>
										<FeatureCard 
											canDropCard={true} 
											isCurrentAnswered={isCurrentAnswered} 
											wasAnsweredOnLoad={wasAnsweredOnLoad}
											wasAnsweredOnLoadIncorrect={wasAnsweredOnLoad && !(lastDroppedCard === answer) ? true : false }
											droppedCards={lastDroppedCard} 
											handleDrop={(item, monitor) => handleDrop(item, monitor)} 
											cssClass={classes.MainFeatures} 
											answerID={answer} 
											lastDroppedCard={lastDroppedCard}
											gotoQuestion={(curr, next)=>gotoQuestion(curr, next)}
											isFirstQuestion={isFirstQuestion}
											isLastQuestion={isLastQuestion}
											isAdvanced={isAdvanced}
											isAdvancedOn={isAdvancedOn}
											unHandleDrop={() => unHandleDrop()}
											isIOS={isIOS}
											isDragged={isDragging}
										>
											{mainQuestion}
										</FeatureCard>
										{selectorDots}
										<div className={classes.Cardpack}>
											{answerCards.map((item, index) => (
												<AnswerCard 
													isThisDropped={ lastDroppedCard === item.id } 
													wasAnsweredOnLoadIncorrect={wasAnsweredOnLoad && !(lastDroppedCard === answer) ? true : false }
													cssClass={classes.eachCard} 
													key={item.id} 
													onClick={() => answerHandler(item.name)} 
													key={item.id} 
													item={item}
													previewImage={item.preview} 
													seeCardHandler={seeCardHandler}
													setDragging={() => setDragging()}
												/>
											))}
											{isMobile ? <MyPreview /> : null}
										</div>
										<h3 className={classes.Inst}>Drag & Drop onto the Correct Card</h3>
								 	</div>
							 	</DndProvider>
							);

	let advancedQuestionAnswer = null;

	if(isAdvancedOn)
	{

		mainQuestionAnswer = null;
		selectorDots = null;

		advancedQuestionAnswer = <AdvancedQuestion 
			advQuestion={advQuestion} 
			clickHandler={(ans, isCorrect) => advancedHandler(ans, isCorrect)} 
			answer={advAnswer}
			gotoQuestion={(curr, next)=>gotoQuestion(curr, next)}
			isFirstQuestion={isFirstQuestion}
			isLastQuestion={isLastQuestion}
			loadNextFromAdvanced = {() => loadNextFromAdvanced()}
		/>
	}
	
	return (
		<Aux>
			<div 
				className={
					isAdvancedOn ? [classes.QuizMainScreen, classes.AdvancedOn].join(' ') 
					: isIOS ? [classes.QuizMainScreen, classes.IOSDevice].join(' ') 
							: isIE ? [classes.QuizMainScreen, classes.IEScreen ].join(' ') : classes.QuizMainScreen
				}
				>
				<Toolbar />
				{mainQuestionAnswer}
				{advancedQuestionAnswer}
				{ !isAdvancedOn && <span className={classes.LeftArrow} onClick={() => gotoQuestion(currentQuestion-1)}>Left</span> }
				{ !isAdvancedOn && <span className={classes.RightArrow} onClick={() => gotoQuestion(currentQuestion+1, true) }>Right</span> }
			</div>
			
		</Aux>
	);

}

export default QuizBuilder;