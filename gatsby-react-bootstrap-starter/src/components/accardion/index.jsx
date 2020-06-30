import React from 'react';
//import Collpase from 'react-collpase';
import { Accordion, Card } from 'react-bootstrap';

export default function AccardionQuestion({ data = [] }) {
	const handleClick = (index) => (e) => {
		const toggleLinks = document.querySelectorAll('#questionAccardion a');
		toggleLinks.forEach((item, i) => i != index && item.classList.remove('active'));
		toggleLinks[index].classList.toggle('active');
	};
	return (
		data.length && (
			<Accordion id="questionAccardion">
				{data.map(({ title = null, text = null }, index) => {
					return (
						<Card key={`${index}_question`} className="rounded">
							<Card.Header>
								<Accordion.Toggle
									as="h5"
									eventKey={index}
									className="mb-0"
									onClick={handleClick(index)}
								>
									<a className="collapsed">{title}</a>
								</Accordion.Toggle>
							</Card.Header>

							<Accordion.Collapse eventKey={index}>
								<Card.Body>{text ? text : ''}</Card.Body>
							</Accordion.Collapse>
						</Card>
					);
				})}
			</Accordion>
		)
	);
}
