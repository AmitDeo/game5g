import React from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.module.scss';

const Layout = props => {
	
	return (
			<Aux>
				<div className={classes.BacktoTbl}>
					<a href="/" alt="BacktoTbl">&laquo; Back to Thinkabit Lab</a>
				</div> 
				{props.children}
			</Aux>
	);	
}

export default Layout;