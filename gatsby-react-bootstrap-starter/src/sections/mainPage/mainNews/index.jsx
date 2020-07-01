import React, { useContext } from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import NewsCard from '../../../components/cards/news';
import SectionSubtitle from '../../../components/title/section_subtitle';

export default function SectionMainNews() {
	const { MAIN_NEWS = [] } = useContext(GlobalContext);
	return (
		MAIN_NEWS.length && (
			<Container as="section" className="py-5">
				<SectionTitle>Новости и акции</SectionTitle>
				<SectionSubtitle>Mollit deserunt esse labore do consequat.</SectionSubtitle>

				<CardDeck>
					{MAIN_NEWS.map((news, index) => {
						return <NewsCard key={`${index}_news`} {...news} index={index} />;
					})}
				</CardDeck>
			</Container>
		)
	);
}
