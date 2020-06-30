import React from 'react';
import { Nav } from 'react-bootstrap';
export default function FooterNav() {
	return (
		<div>
			<Nav className="align-items-center justify-content-center ">
				<Nav.Item>
					<Nav.Link href="/">Маршруты</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					{' '}
					<Nav.Link href="/">Аренда</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					{' '}
					<Nav.Link href="/">Клиентам </Nav.Link>
				</Nav.Item>
				<Nav.Item>
					{' '}
					<Nav.Link href="/page-2">Агенствам</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					{' '}
					<Nav.Link href="/page-2">Перевозчикам</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					{' '}
					<Nav.Link href="/page-2">О компании</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}
