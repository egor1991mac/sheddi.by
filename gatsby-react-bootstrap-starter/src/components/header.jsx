import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import NavBar from './navBar';

import { Container, Row, Col } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
	<header>
		<Container>
			<Row>
				<NavBar />
			</Row>
		</Container>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
