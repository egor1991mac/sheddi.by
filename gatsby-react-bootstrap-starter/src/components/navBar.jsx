import React, { useContext } from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import Drawer from './dialog/drawer';
import { GlobalContext } from '../store/context';
import { MdPerson } from 'react-icons/md';
import TopMobileMenu from './navs/topMobile';
import TopDesctopMenu from './navs/topDesctop';

const CustomNavbar = () => {
	const { onOpenAuthDialog } = useContext(GlobalContext);

	return (
		<Navbar collapseOnSelect expand="lg" className="w-100 bg-white shadow-sm">
			<Container>
				<Navbar.Brand href="/" className="d-flex">
					<img src="logo.svg" style={{ maxWidth: '150px' }} alt="sheddi" />
				</Navbar.Brand>
				<div className="d-none d-lg-flex ml-auto align-items-center">
					<TopDesctopMenu />
					<div className="vertical-line" />
					<Button className="btn-auth btn-clear" data-text="Войти" onClick={onOpenAuthDialog}>
						<span className="auth-icon">
							<MdPerson />
						</span>
					</Button>
				</div>
				<div className="d-flex d-lg-none align-items-center">
					<button className={'btn-clear btn-animate'} onClick={onOpenAuthDialog}>
						<MdPerson size="28" className="cursor" />
					</button>

					<div className="vertical-line" />
					<TopMobileMenu />
				</div>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
