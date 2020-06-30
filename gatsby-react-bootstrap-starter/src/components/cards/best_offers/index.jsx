import React from 'react';
import { Card, Button } from 'react-bootstrap';
export default function BestOffersCard({ title = null, date = null, cost = null, currency = null, link = null }) {
	return (
		<Card className="d-flex flex-row mb-3">
			<Card.Body className="p-3">
				<div className="card-title h4"> {title ? title : ''}</div>
				<Card.Subtitle>
					{' '}
					от {cost ? cost : ''}
					{currency ? currency : ''}
				</Card.Subtitle>
			</Card.Body>
			<Card.Body className="ml-auto flex-grow-0 p-3 d-flex">
				<Card.Link href={link | ''} className="btn btn-primary btn-sm my-auto">
					Бронировать
				</Card.Link>
			</Card.Body>
		</Card>
	);
}
