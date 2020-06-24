import React from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainSearchForm from '../components/forms/mainSearchForm';
import MainFormSlider from '../components/sliders/mainFormSlider';
import MainSectionBestPrice from '../sections/mainPage/mainBestPrice';
import MainSectionWhyWeAre from '../sections/mainPage/mainWhyWeAre';
import MainSectionQuestionAnswer from '../sections/mainPage/mainQuestionAnswer';
import MainSectionNews from '../sections/mainPage/mainNews';

const IndexPage = () => (
	<Layout pageInfo={{ pageName: 'index' }}>
		<SEO title="Home" keywords={[ `gatsby`, `react`, `bootstrap` ]} />

		<section className="bg-secondary py-5">
			<Container>
				<Row noGutters className="bg-light p-3">
					<Col lg="5" className="">
						<MainSearchForm />
					</Col>
					<Col lg="7">
						<MainFormSlider />
					</Col>
				</Row>
			</Container>
		</section>
		<MainSectionBestPrice />
		<MainSectionWhyWeAre />
		<MainSectionQuestionAnswer />
		<MainSectionNews />
		<Container>
			<Row className="justify-content-center my-3">
				<Col md="6">
					<ListGroup>
						<ListGroup.Item action href="https://getbootstrap.com" target="_blank">
							Bootstrap
						</ListGroup.Item>
						<ListGroup.Item action href="https://react-bootstrap.github.io/" target="_blank">
							react-bootstrap
						</ListGroup.Item>
						<ListGroup.Item action href="https://react-icons.netlify.com" target="_blank">
							react-icons
						</ListGroup.Item>
						<ListGroup.Item
							action
							href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
							target="_blank"
						>
							gatsby-plugin-sass
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						This starter also includes a navbar that sticks to the top of the screen when the user scrolls
						past it, and a footer that stays at the bottom of the screen.
					</p>
					<p>
						For more documentation on these packages and how they work, please refer to the pages linked in
						the list above.
					</p>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default IndexPage;
