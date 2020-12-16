import React from 'react';

import tblLogo from '../../assets/images/logo.png';

import classes from './Logo.module.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<a href="https://dev-tbl8.pantheonsite.io"><img src={tblLogo} alt="5G Card Game" /></a>
	</div>
);

export default logo;