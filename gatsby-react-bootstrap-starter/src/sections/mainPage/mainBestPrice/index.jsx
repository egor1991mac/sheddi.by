import React, { useContext } from 'react';
import BestOffersCard from '../../../components/cards/best_offers';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import { GlobalContext } from '../../../store/context';
import BoxWhite from '../../../components/boxes/boxWhite';
export default function MainSectionBestPrice() {
	const { OFFERS = [] } = useContext(GlobalContext);

	return (
		OFFERS.length && (
			<Container as="section">
				<BoxWhite>
					<SectionTitle>Лучшие предложения</SectionTitle>
					<SectionSubTitle>Nulla minim laboris occaecat cillum aliqua dolore ipsum.</SectionSubTitle>
					<Row>
						{OFFERS.map((offers, index) => {
							return (
								<Col md="6" key={`${index}_bestOffers`}>
									<BestOffersCard {...offers} />
								</Col>
							);
						})}
					</Row>
				</BoxWhite>
			</Container>
		)
	);
}
