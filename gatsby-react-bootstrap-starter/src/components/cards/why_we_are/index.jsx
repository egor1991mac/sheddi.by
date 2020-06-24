import React from 'react';
import { Card } from 'react-bootstrap';

export default function WhyWeAreCard({ title = null, subtitle = null, icon = null }) {
	return (
		<Card>
			{icon && <Card.Img loading="lazy" src={icon} />}
			<Card.Body>
				{title && <Card.Title> title</Card.Title>}
				{subtitle && <Card.Subtitle> </Card.Subtitle>}
			</Card.Body>
		</Card>
	);
}
