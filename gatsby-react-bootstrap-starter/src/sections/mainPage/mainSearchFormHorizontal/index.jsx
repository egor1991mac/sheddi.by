import React from 'react';
import MainSearchForm from '../../../components/forms/mainSearchForm';

import { Container, Row, Col } from 'react-bootstrap';
export default function mainSearchFormHorizontal() {
	return (
		<section className="bg-form py-5">
			<Container className="py-5">
				{/* <h2 className="text-white text-center mb-4">Автобусые туры</h2> */}
				<Row noGutters>
					<Col className="">
						<MainSearchForm type={'hor'} />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
