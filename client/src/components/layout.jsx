/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Navbar from './navBar';
import AuthDialog from './dialog/authDialog';
import GlobalState from '../store';

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
				<GlobalState>
					<Header />
					<main>{children}</main>
					<AuthDialog />
				</GlobalState>
			</div>
		)}
	/>
);

export default Layout;
