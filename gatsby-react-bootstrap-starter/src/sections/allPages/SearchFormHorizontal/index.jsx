import React from 'react';
import MainSearchForm from '../../../components/forms/mainSearchForm';
import ScrollContainer from '../../../components/scrollContainer';
import { Container, Row, Col } from 'react-bootstrap';
export default function mainSearchFormHorizontal() {
	return (
		<section className="bg-form py-5">
			<Container className="py-5">
				<ScrollContainer>
					<MainSearchForm type={'hor'} />
				</ScrollContainer>
			</Container>
		</section>
	);
}
