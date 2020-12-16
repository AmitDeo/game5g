import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sidedrawer = (props) => {

	// ...
	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')} onClick={props.closed}>
				<div  className={classes.Logo}>
					<Logo />
				</div>
				<nav className={classes.NavMenu}>
					<ul>
						<li><a href="https://dev-tbl8.pantheonsite.io/">Thinkabit Lab</a></li>
						<li><a href="https://dev-tbl8.pantheonsite.io/5g-academy">5G Academy</a></li>
						<li><a href="https://dev-tbl8.pantheonsite.io/learning-center">Learning Center</a></li>
					</ul>
				</nav>
			</div>
		</Aux>
	);
};

export default sidedrawer;