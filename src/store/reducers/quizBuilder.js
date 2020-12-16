import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
	questions: [],
	loading: false,
	completed: false,
	currentQuestion: 0,
	error: null,
	starttime: null,
	endtime: null,
	attempts: 0,
	missed: 0,
	isGameStarted: false,
	isGameOver: false,
	isAdvanced: true,
	isLastQuestion: false,
	lastDraggedCard: null,
	isDragging: false,
	correctAnswers: 0,
	swipeState: {
	      left: 0,
	      originalOffset: 0,
	      velocity: 0,
	      timeOfLastDragEvent: 0,
	      touchStartX: 0,
	      prevTouchX: 0,
	      beingTouched: false,
	      height: 0,
	      intervalId: null
	}
};

const startFetchingQuestions = (state, action) => {
	return updateObject(state, {loading: true});
}

const successFetchingQuestions = (state, action) => {
	return updateObject(state, {
		questions: action.questions,
		loading: false,
		completed: true,
		currentQuestion: 0,
		currentQuestion: 0,
		error: null,
		starttime: null,
		endtime: null,
		attempts: 0,
		missed: 0,
		isGameStarted: false,
		isGameOver: false,
		isAdvanced: true,
		isLastQuestion: false,
		lastDraggedCard: null,
		isDragging: false,
		correctAnswers: 0
	});
}


const errorFetchingQuestions = (state, action) => {
	return updateObject(state, {
		loading: false,
		completed: false,
		questions: [],
		error: action.error
	});
}

const getQuestion = (state, action) => {

	let currQ = action.id;
	const questionLen = state.questions.length ;
	let isLast = false;

	if(currQ >= (questionLen - 1))
	{
		currQ = (questionLen - 1);
		isLast = true;
	}
	else if ( currQ <= 0)
	{
		currQ = 0
	}
	
	return updateObject(state, {currentQuestion: currQ, isLastQuestion: isLast });

}

const incrementTicker = (state, action) => {
	return updateObject(state, {ticker: state.ticker + 1});
}

const incrementAttempt = (state, action) => {
	state.questions[action.currentQuestion].isAnswered = true;
	state.questions[action.currentQuestion].userAnswer = action.userAnswer;
	
	state = checkIsGameOver(state);
	return updateObject(state, 
			{
				attempts: state.attempts + 1, 
				missed: state.missed + action.missed, 
				correctAnswers: state.correctAnswers 
					+ 
					state.questions[action.currentQuestion].userAnswer ===  state.questions[action.currentQuestion].answer
					? 1
					: 0
			}
	);
}

const incrementAdvAttempt = (state, action) => {
	state.questions[action.currentQuestion].isAdvAnswered = true;
	state.questions[action.currentQuestion].userAdvAnswer = action.userAnswer;
	
	state = checkIsGameOver(state);

	return updateObject(state, 
			{
				attempts: state.attempts + 1, 
				missed: state.missed + action.missed, 
				correctAnswers: state.correctAnswers + action.is_correct ? 1 : 0
			}
	);
}


const celebrateOn = (state, action) => {
	state.questions[action.currentQuestion].isCelebrated = true;
	return state;
}

const startGame = (state, action) => {
	var date = new Date();
	return updateObject(state, {isGameStarted: true, starttime: date.getTime(), endtime: null });
}

const toogleAdvanced = (state, action) => {
	return updateObject(state, {isAdvanced: !state.isAdvanced});
}

const setIntervalObj = (state, action) => {
	return updateObject(state, {intervalObj: action.obj});
}

const clearIntervalObj = (state, action) => {
	clearInterval(state.intervalObj);
	return updateObject(state, {intervalObj: null});
}


const finishGame = (state, action) => {

	//Calculate total points
	var missed = 0;
	state.questions.map((mainQsn) => {
		
		if(mainQsn.answer !== mainQsn.userAnswer)
		{
			missed += 1;
		}

		if(state.isAdvanced){

			missed += mainQsn.userAdvAnswer !== null && +mainQsn.advanced_options[mainQsn.userAdvAnswer].is_correct === 1 ? 0 : 1;
		}

		return null;
	});

	var date = new Date();

	return updateObject(state, {
		questions: [],
		loading: false,
		completed: true,
		currentQuestion: 0,
		error: null,
		isGameStarted: false,
		isGameOver: false,
		intervalObj: null,
		isLastQuestion: false,
		attempts: 0,
		missed: missed,
		endtime: date.getTime() 
	});
}


const restartGame = (state, action) => {

	return updateObject(state, {
		intervalObj: null,
		questions: [],
		loading: false,
		completed: false,
		currentQuestion: 0,
		error: null,
		isGameStarted: false,
		isGameOver: false,
		ticker: 0,
		isLastQuestion: false,
		attempts: 0,
		missed: 0,
		isAdvanced: true,
		starttime: null,
		endtime: null
	});
}

const dragCard = (state, action) => {
	return updateObject(state, {
		lastDraggedCard: action.lastDraggedCard,
		isDragging: action.isDragging
	});
}


const updateSwipe = (state, action) => {
	return updateObject(state, {
		swipeState: {...action.swipeObj}
	});
}

const checkIsGameOver = (state) => {

	if(state.isAdvanced && state.attempts >= 11)
	{
		return updateObject(state, {
			isGameOver: true
		});	
	}

	if(!state.isAdvanced && state.attempts >= 6)
	{
		return updateObject(state, {
			isGameOver: true
		});	
	}
	

	const allAnswered = state.questions.reduce((acc , mainQsn) => {
							acc = state.isAdvanced ?
									acc && ((mainQsn.userAnswer !== null) && (mainQsn.userAdvAnswer !== null))
									: acc && (mainQsn.userAnswer !== null);
							return acc;
						}, true);
	return updateObject(state, {
		isGameOver: allAnswered
	});							
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_QUESTIONS_START: return startFetchingQuestions(state, action);
		case actionTypes.FETCH_QUESTIONS_SUCCESS: return successFetchingQuestions(state, action);
		case actionTypes.FETCH_QUESTIONS_FAIL: return errorFetchingQuestions(state, action);
		case actionTypes.INCREMENT_TICKER: return incrementTicker(state, action);
		case actionTypes.INCREMENT_ATTEMPT: return incrementAttempt(state, action);
		case actionTypes.CELEBRATED_ON: return celebrateOn(state, action);
		case actionTypes.INCREMENT_ADV_ATTEMPT: return incrementAdvAttempt(state, action);
		case actionTypes.GET_QUESTION: return getQuestion(state, action);
		case actionTypes.START_GAME: return startGame(state, action);
		case actionTypes.TOGGLE_ADVANCED: return toogleAdvanced(state, action);
		case actionTypes.GET_QUESTION: return getQuestion(state, action);
		case actionTypes.SET_INTERVAL_OBJ: return setIntervalObj(state, action);
		case actionTypes.CLEAR_INTERVAL_OBJ: return clearIntervalObj(state, action);
		case actionTypes.FINISH_GAME: return finishGame(state, action);
		case actionTypes.RESTART_GAME: return restartGame(state, action);
		case actionTypes.DRAG_CARD: return dragCard(state, action);
		case actionTypes.UPDATE_SWIPE_OBJECT: return updateSwipe(state, action);

		default:
			return state;
	}
};

export default reducer;