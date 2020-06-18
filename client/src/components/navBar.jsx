import React from 'react';
import { Link } from 'gatsby';

import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';

const CustomNavbar = ({ pageInfo }) => {
	return (
		<Navbar className="w-100 align-items-center">
			<Link href="#index">
				<Navbar.Brand>Sheddi</Navbar.Brand>
			</Link>
			<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
				<Nav>
					<Nav.Link href="#index">Маршруты</Nav.Link>
					<Nav.Link href="#home">Аренда</Nav.Link>
					<NavDropdown alignRight title="Клиентам" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Оплата</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Правила перевоза багажа</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Договор публичной оферты</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.4">Как забронировать</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.4">Вопросы и ответы</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#home">Агенствам</Nav.Link>
					<Nav.Link href="#home">Перевозчикам</Nav.Link>

					<Nav.Link href="#home">О компании</Nav.Link>
					<div className="vertical-line" />
					<Button className="btn-auth btn-clear" data-text="Войти">
						<span class="auth-icon">
							<BsFillPersonFill />
						</span>
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default CustomNavbar;
