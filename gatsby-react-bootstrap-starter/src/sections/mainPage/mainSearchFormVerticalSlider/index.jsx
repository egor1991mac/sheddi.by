import React from 'react';
import MainSearchForm from '../../../components/forms/mainSearchForm';
import MainFormSlider from '../../../components/sliders/mainFormSlider';
import { Container, Row, Col } from 'react-bootstrap';
export default function mainSearchFormVerticalSlider() {
	return (
		<section className="bg-secondary py-5">
			<Container className="">
				<Row noGutters className=" bg-light shadow-md rounded p-3">
					<Col md="5" className="pr-md-3">
						<MainSearchForm />
					</Col>
					<Col md="7" className="pl-md-3 pt-3 pt-md-0">
						<MainFormSlider />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
