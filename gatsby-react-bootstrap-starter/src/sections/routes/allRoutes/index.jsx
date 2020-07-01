import React, { useContext } from 'react';
import RouteCard from '../../../components/cards/routes';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import { GlobalContext } from '../../../store/context';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function SectionRoutes() {
	const { ROUTES: { data = [], nowShowRoutes = 0, allCountRoutes = 0 }, onShowMoreRoutes = null } = useContext(
		GlobalContext
	);

	return (
		data.length && (
			<Container as="section" className="py-5">
				<SectionTitle>Маршруты</SectionTitle>
				<SectionSubTitle>Nulla minim laboris occaecat cillum aliqua dolore ipsum.</SectionSubTitle>

				<TransitionGroup className="row">
					{data.map((offers, index) => {
						if (index < nowShowRoutes) {
							return (
								<CSSTransition key={`${index}_routes`} timeout={500} classNames="route">
									<Col md="4" className="mb-4">
										<RouteCard {...offers} />
									</Col>
								</CSSTransition>
							);
						}
					})}
				</TransitionGroup>

				{nowShowRoutes < allCountRoutes && (
					<Row>
						<Button className="m-auto" onClick={() => onShowMoreRoutes(6)}>
							Показать еще
						</Button>
					</Row>
				)}
			</Container>
		)
	);
}
