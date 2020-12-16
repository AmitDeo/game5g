import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const fetchQuestionsSuccess = (questions) => {
	return {
		type: actionTypes.FETCH_QUESTIONS_SUCCESS,
		questions: questions
	}
}

export const fetchQuestionsFail = (error) => {
	return {
		type: actionTypes.FETCH_QUESTIONS_FAIL,
		error: error
	}
}


export const fetchQuestionsStart = () => {
	return {
		type: actionTypes.FETCH_QUESTIONS_START
	}
}


export const fetchQuestions = () => {
	return dispatch => {
		dispatch(fetchQuestionsStart());
		axios.get('questions')
		 .then(res => {
		 		const fetchedQuestions = [];
		 		for ( let key in res.data.data) {
		 			fetchedQuestions.push({
		 				...res.data.data[key],
		 				id: key,
		 				isAnswered: false,
		 				isAdvAnswered: false,
		 				userAnswer: null,
		 				userAdvAnswer: null,
		 				isCelebrated: false
		 			});
		 		}
		 		dispatch(fetchQuestionsSuccess(fetchedQuestions));
		 })
		 .catch(err => {
		 	dispatch(fetchQuestionsFail(err))
		 });
	}
}


export const turnAdvancedMode = () => {
	return {
		type: actionTypes.TOGGLE_ADVANCED
	}
}


export const advancedMode = () => {
	return dispatch => {
		dispatch(turnAdvancedMode());
	}
}


export const getQuesn = (nxtQsn) => {
	return {
		type: actionTypes.GET_QUESTION,
		id: nxtQsn
	}
}


export const getQuestion = (nxtQsn) => {
	return dispatch => {
		dispatch(getQuesn(nxtQsn));
	}
}


export const turnOnGame = () => {
	return {
		type: actionTypes.START_GAME
	}
}


export const startGame = () => {
	return dispatch => {
		dispatch(turnOnGame());
	}
}


export const incAttmpt = (isMissed, currentQuestion, userAnswer) => {
	return {
		type: actionTypes.INCREMENT_ATTEMPT,
		missed: isMissed,
		currentQuestion: currentQuestion,
		userAnswer: userAnswer
	}
}

export const incrementAttempt = (isMissed, currentQuestion, userAnswer) => {
	return dispatch => {
		dispatch(incAttmpt(isMissed, currentQuestion, userAnswer));
	}
}


export const incAdvAttmpt = (isMissed, currentQuestion, userAnswer,is_correct) => {
	return {
		type: actionTypes.INCREMENT_ADV_ATTEMPT,
		missed: isMissed,
		currentQuestion: currentQuestion,
		userAnswer: userAnswer,
		is_correct: is_correct
	}
}


export const celebratedOnFunc = (currentQuestion) => {
	return {
		type: actionTypes.CELEBRATED_ON,
		currentQuestion: currentQuestion,
	}
}


export const celebratedOn = (currentQuestion) => {
	return dispatch => {
		dispatch(celebratedOnFunc(currentQuestion));
	}
}



export const incrementAdvAttempt = (isMissed, currentQuestion, userAnswer, is_correct) => {
	return dispatch => {
		dispatch(incAdvAttmpt(isMissed, currentQuestion, userAnswer, is_correct));
	}
}


export const finishGameFunc = () => {
	return {
		type: actionTypes.FINISH_GAME
	}
}


export const finishGame = () => {
	return dispatch => {
		dispatch(finishGameFunc());
	}
}


export const restartGameFunc = () => {
	return {
		type: actionTypes.RESTART_GAME
	}
}

export const restartGame = () => {
	return dispatch => {
		dispatch(restartGameFunc());
	}
}



export const dragCardFunc = (isDragging, lastDraggedCard) => {
	return {
		type: actionTypes.DRAG_CARD,
		isDragging: isDragging,
		lastDraggedCard: lastDraggedCard,
	}
}

export const dragCard = (isDragging, lastDraggedCard) => {
	return dispatch => {
		dispatch(dragCardFunc(isDragging, lastDraggedCard));
	}
}


export const updateSwipeFunc = (swipeObj) => {
	return {
		type: actionTypes.UPDATE_SWIPE_OBJECT,
		swipeObj: swipeObj,
	}
}

export const updateSwipe = (swipeObj) => {
	return dispatch => {
		dispatch(updateSwipeFunc(swipeObj));
	}
}

