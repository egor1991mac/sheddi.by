import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import NewsCard from '../../../components/cards/news';

export default function SectionMainNews() {
	const { MAIN_NEWS = [] } = useContext(GlobalContext);
	return (
		MAIN_NEWS.length && (
			<Container as="section" className="py-5">
				<SectionTitle>Новости и акции</SectionTitle>

				<Row sm={2} md={3}>
					{MAIN_NEWS.map((news, index) => {
						return (
							<Col key={`${index}_news`}>
								<NewsCard {...news} />
							</Col>
						);
					})}
				</Row>
			</Container>
		)
	);
}
