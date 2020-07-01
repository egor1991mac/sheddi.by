import React from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import MainSearctionFormVerticalSlider from '../sections/mainPage/mainSearchFormVerticalSlider';
import SectionOffers = 
import MainSectionQuestionAnwer from '../sections/mainPage/mainQuestionAnswer';

const IndexPage = () => (
	<Layout pageInfo={{ pageName: 'index' }}>
		<SEO title="Home" keywords={[ `gatsby`, `react`, `bootstrap` ]} />
		{/* <MainSearctionFormVerticalSlider /> */}
		<MainSearctionFormHorizontal />
		<MainSectionBestPrice />
		<MainSectionWhyWeAre />
		<MainSectionQuestionAnswer />
		<MainSectionNews />
	</Layout>
);

export default IndexPage;
