/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';

import Header from './header';
import Navbar from './navBar';
import AuthDialog from './authDialog';

const Layout = ({ children, pageInfo }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<div id="main-wrapper">
				<Header />
				<main>{children}</main>
				<AuthDialog />
			</div>
		)}
	/>
);

export default Layout;
