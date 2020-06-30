import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'gatsby';
import { MdDateRange, MdRemoveRedEye } from 'react-icons/md';
export default function NewsCard({ title = null, date = null, text = null, img = null, see = null, link = null }) {
	return (
		<Card as={Link} to={link}>
			{img && <Card.Img src={img} />}
			<Card.Body>
				<div className="d-flex justify-content-between mb-2">
					{date && (
						<Card.Subtitle className="color-secondary">
							{' '}
							<MdDateRange /> {date}
						</Card.Subtitle>
					)}
					{/* {date && (
						<Badge variant="secondary">
							{' '}
							<MdRemoveRedEye /> {see}
						</Badge>
					)} */}
				</div>
				{title && <Card.Title> {title}</Card.Title>}

				<hr />

				{text && <Card.Text>{text}</Card.Text>}
			</Card.Body>
		</Card>
	);
}
