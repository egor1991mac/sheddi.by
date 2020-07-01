/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import AuthDialog from './dialog/authDialog';
import GlobalState from '../store';
import { GlobalContext } from '../store/context';

const Layout = ({ children, pageInfo }) => {
	return (
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
						<GlobalContext.Consumer>
							{({ OPEN_AUTH_DIALOG = false }) => (
								<div>
									<Header />
									<main>{children}</main>
									<Footer />
									{OPEN_AUTH_DIALOG && <AuthDialog />}
								</div>
							)}
						</GlobalContext.Consumer>
					</GlobalState>
				</div>
			)}
		/>
	);
};

export default Layout;
