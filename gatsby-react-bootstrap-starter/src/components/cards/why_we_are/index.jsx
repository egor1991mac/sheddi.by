import React from 'react';
import { Card } from 'react-bootstrap';

export default function WhyWeAreCard({ title = null, subtitle = null, icon = null }) {
	return (
		<div className="featured-box text-center ">
			{icon && <img src={icon} alt="title" className="pb-2" />}

			{title && <h4> {title}</h4>}
			{subtitle && <p>{subtitle} </p>}
		</div>
	);
}
