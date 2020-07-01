import React from 'react';
import { Card } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'gatsby';

export default function BestOffersCard({
	title = [],
	date = null,
	cost = null,
	currency = null,
	link = null,
	route = ''
}) {
	return (
		<Card as={Link} to={link} className="d-flex flex-row mb-3 flex-wrap p-2 p-md-3">
			<Card.Body className=" p-0">
				<Card.Title className="d-flex align-items-center mb-1">
					{' '}
					{title.length ? title[0] : ''} <BsArrowRight className="mx-2" />
					{title.length ? title[1] : ''}{' '}
				</Card.Title>
				<Card.Subtitle className="text-muted">
					от {cost ? cost : ''}
					{currency ? currency : ''} / {route}
				</Card.Subtitle>
			</Card.Body>
			<Card.Body className="ml-auto flex-grow-0 p-0 d-flex my-auto">
				<div
					className="border rounded-circle ml-auto d-flex bg-primary text-white"
					style={{ width: '35px', height: '35px' }}
				>
					<BsArrowRight className="m-auto" style={{ transform: 'translate(0px,1px)' }} />
				</div>
			</Card.Body>
		</Card>
	);
}
