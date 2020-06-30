import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../../store/context';
import Drawer from '../../dialog/drawer';
import { Transition } from 'react-transition-group';
import { ListGroup } from 'react-bootstrap';
import Social from '../../contacts/social';
import Contact from '../../contacts/contact';
import Collapse from '../../collapse';
import { Link } from 'gatsby';
import { MdMenu } from 'react-icons/md';
const duration = 300;
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out `,
	opacity: 0
};

const transitionStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
};
//import Hamburger from 'hamburger-react';

const TopMobile = ({ children }) => {
	const { onToggleMobileNav = null, TOGGLE_MOBILE_NAV = false, TOP_NAVS = [] } = useContext(GlobalContext);

	return TOP_NAVS.length ? (
		<div>
			<button className={'btn-clear btn-animate'} onClick={onToggleMobileNav}>
				<MdMenu size="28" />
			</button>

			<Transition in={TOGGLE_MOBILE_NAV} timeout={duration} unmountOnExit={true} appear={true}>
				{(state) => (
					<Drawer
						styles={{
							...defaultStyle,
							...transitionStyles[state]
						}}
						callback={onToggleMobileNav}
					>
						<div className="drawer-content">
							<ListGroup variant="flush">
								{TOP_NAVS.map(({ title, link, children = [], id }, index) => {
									return !children.length ? (
										<ListGroup.Item key={`${id}_mobile`}>
											<Link to={link}>{title}</Link>
										</ListGroup.Item>
									) : (
										<ListGroup.Item key={`${id}_mobile`}>
											<Collapse key={`${id}_children_mobile`} title={title}>
												<ListGroup variant="flush">
													{children.map(({ title, link, id }) => (
														<Link key={`${id}_children`} to={link}>
															{title}
														</Link>
													))}
												</ListGroup>
											</Collapse>
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</div>

						<div className="drawer-footer">
							<Contact />
							<Social />
						</div>
					</Drawer>
				)}
			</Transition>
		</div>
	) : null;
};
export default TopMobile;
