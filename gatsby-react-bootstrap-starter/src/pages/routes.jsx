import React from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import MainSearctionFormVerticalSlider from '../sections/mainPage/mainSearchFormVerticalSlider';
import MainSearctionFormHorizontal from '../sections/mainPage/mainSearchFormHorizontal';
import SectionRoutes from '../sections/routes/allRoutes';

const IndexPage = () => (
	<Layout pageInfo={{ pageName: 'routes' }}>
		<SEO title="Home" keywords={[ `gatsby`, `react`, `bootstrap` ]} />
		{/* <MainSearctionFormHorizontal /> */}
		<SectionRoutes />
	</Layout>
);

export default IndexPage;
