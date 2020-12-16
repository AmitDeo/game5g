import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SideDrawer from '../SideDrawer/SideDrawer';

import classes from './Toolbar.module.scss';
import Menu from '../Menu/Menu';
import * as quizBuilderActions from '../../../store/actions/index'
import { minsecFormat } from '../../../shared/utility';


import Aux from '../../../hoc/Aux/Aux';

const Toolbar = (props) => {

	const [ticker, setTicker] = useState(0);
	const [toggleMenu, setToggleMenu] = useState(false);

	let header = null;

	const isGameStarted = useSelector(state => {
		return state.quizBuilder.isGameStarted;
	});

	const dispatch = useDispatch();

	const starttime = useSelector(state => {
		return state.quizBuilder.starttime;
	});

	const attempts = useSelector(state => {
		return state.quizBuilder.attempts;
	});

	const isAdvanced = useSelector(state => {
		return state.quizBuilder.isAdvanced;
	});

	useEffect(() => {
		const interval_id = setInterval(() => {
			const currDate = new Date();
			const diff = Math.floor((currDate.getTime() - starttime) / 1000);
			setTicker(diff);
		}, 1000);

		return () => clearInterval(interval_id);

	}, [starttime]);

	const refreshHandler = useCallback((e) => {
		e.preventDefault();
		dispatch(quizBuilderActions.restartGame());
	}, [dispatch]);

	const openDrawer = useCallback(() => {
		setToggleMenu(!toggleMenu);
	}, [toggleMenu]);

	if(isGameStarted || props.hideCounter)
	{
		const flexBasis = {
			flexBasis: isAdvanced ? '33%' : '50%'
		}

		header = (<header className={classes.Toolbar}>
						<Menu clicked={() => openDrawer()}/>
						{props.hideCounter
						? ''
						:
							<Aux>
								<div className={classes.Stats}>
									<div 
										className={classes.Timer}
										style={ flexBasis }
									>
										<span>Timer</span>{minsecFormat(ticker)}
									</div>
									<div style={ flexBasis } className={classes.Moves}><span>Moves</span>{attempts}/{isAdvanced ? '11' : '6'}</div>
									{false && <div style={ flexBasis } className={classes.Mode}><span>Mode</span>ADV</div> }
								</div>
								<div className={classes.Refresh}>
									<a href="#" onClick={(e) => refreshHandler(e)}>Refresh</a>
								</div>
							</Aux>
						}
					</header>
				);
	}

	return (
			<Aux>
				{header}
				<SideDrawer open={toggleMenu} closed={() => openDrawer()}/>
			</Aux>
	);

};

export default Toolbar;