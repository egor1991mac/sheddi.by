import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PaymentBlock from './payment_block';
import Contact from './contacts/contact';
import Social from './contacts/social';
import SubscribeForm from './forms/subscribe';
import FooterNav from './navs/footer';
export default function Footer() {
	return (
		<footer id="footer">
			<Container>
				<Row>
					<Col xs="12" lg={4}>
						<p className="mb-0">
							ИП Дылевский Владимир Владимирович <br /> УНП 190547469 <br /> р/с
							BY78AKBB30135240111930000000 БИК AKBBBY2X ЦБУ №527 в ОАО Беларусбанк, г. Минск <br /> Адрес:
							г.Минск, ул.Воронянского, 7а Cвидетельство о гос. регистрации №190547469 от 19 января 2012
							г. выдано Администрация Октябрьского района г. Минска
						</p>
					</Col>
					<Col xs="12" lg={4} className="py-5 py-lg-0">
						<h5 className="mb-3">Контакты</h5>
						<Contact />
						<Social />
						<SubscribeForm />
					</Col>
					<Col xs="12" lg={4}>
						<h5 className="mb-3">Платежные системы</h5>
						<PaymentBlock />
					</Col>
				</Row>

				<Row className="footer-copyright">
					<Col xs="12">
						<FooterNav />
					</Col>
					<Col xs="12">
						<p className="copyright-text text-center">
							Copyright © 2020 <a href="#">travelsoft</a>.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
