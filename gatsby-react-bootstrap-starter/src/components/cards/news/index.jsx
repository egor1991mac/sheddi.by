import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'gatsby';
export default function NewsCard({ title = null, date = null, text = null, img = null, see = null, link = null }) {
	return (
		<Link to={link || ''}>
			<Card>
				{img && <Card.Img src={img} />}
				<Card.Body>
					{title && <Card.Title> {title}</Card.Title>}
					<hr />
					{date && <Card.Subtitle>{date}</Card.Subtitle>}
					{text && <Card.Text>{text}</Card.Text>}
				</Card.Body>
			</Card>
		</Link>
	);
}
