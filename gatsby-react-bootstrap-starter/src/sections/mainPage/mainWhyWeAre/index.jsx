import React, { useContext } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import WhyWeAreCard from '../../../components/cards/why_we_are';

export default function MainWhyWeAre() {
	const { MAIN_WHY_WE_ARE = [] } = useContext(GlobalContext);

	return (
		MAIN_WHY_WE_ARE.length && (
			<div className="bg-white">
				<Container as="section" className="py-5">
					<Row className="justify-content-center">
						{MAIN_WHY_WE_ARE.map((item, index) => {
							return (
								<Col md="4" key={`${index}_card_we_are`} className="col-lg">
									<WhyWeAreCard {...item} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		)
	);
}
