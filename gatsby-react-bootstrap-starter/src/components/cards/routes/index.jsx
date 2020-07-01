import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

export default function RouteCard({
	title = [],
	date = null,
	cost = null,
	currency = null,
	link = null,
	route = '',
	img = ''
}) {
	return (
		<Card as={Link} to={link} className="d-flex flex-row flex-wrap overflow-hidden">
			<div className="card-img-container">{img && <img src={img} className="img-cover" />}</div>

			<Card.Body className={' py-3 d-flex flex-column'}>
				<Card.Text className="text-muted d-flex align-items-center">
					{route}{' '}
					<div
						className="border bg-primary text-white rounded-circle ml-auto d-flex display-onHover"
						style={{ width: '25px', height: '25px' }}
					>
						<BsArrowRight className="m-auto" style={{ transform: 'translate(0px,1px)' }} />
					</div>
				</Card.Text>
				<Card.Title className="d-flex align-items-center mb-1 mt-auto">
					{title.length ? title[0] : ''} <BsArrowRight className="mx-2" />
					{title.length ? title[1] : ''}{' '}
				</Card.Title>
				<Card.Subtitle className="text-muted">
					от {cost ? cost : ''}
					{currency ? currency : ''}
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
}
