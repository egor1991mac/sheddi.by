import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function AccardionQuestionCard({ title = null, text = null }) {
	return (
		<Card className="d-flex flex-row">
			<Card.Body>
				<Card.Title className="mb-0"> {title ? title : ''}</Card.Title>
				<Card.Subtitle>
					{' '}
					{date ? date : ''} / от {cost ? cost : ''}
					{currency ? currency : ''}
				</Card.Subtitle>
			</Card.Body>
			<Card.Body className="ml-auto flex-grow-0">
				<Card.Link href={link | ''} className="btn btn-primary">
					Бронировать
				</Card.Link>
			</Card.Body>
		</Card>
	);
}
