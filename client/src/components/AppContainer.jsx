/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar/NavBar';

class AppContainer extends Component {
	static propTypes = {
		hasNav: PropTypes.bool,
	};

	static defaultProps = {
		hasNav: true,
	};

	render() {
		const { hasNav, children } = this.props;
		const classNames = ['App'];

		return (
			<Fragment>
				{hasNav && <NavBar />}
				<main className={classNames.join(' ')}>{children}</main>
			</Fragment>
		);
	}
}

export default AppContainer;
