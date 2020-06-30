import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { GlobalContext } from '../../store/context';
import lang from './lang.json';
export default function MainFormSlider() {
	const { MAIN_SLIDER_SLIDS = null } = useContext(GlobalContext);

	return (
		<Carousel>
			{MAIN_SLIDER_SLIDS &&
				MAIN_SLIDER_SLIDS.map(({ img = null, title = null, subtitle = null, link = null }, index) => {
					return (
						<Carousel.Item key={`${index}_mainSlider`} className="position-relative rounded oveflow-hidden">
							<img className="img-cover" src={img || ''} alt={title || ''} />
							<Carousel.Caption>
								{title ? <h3>{title}</h3> : ''}
								{subtitle ? <p>{subtitle}</p> : ''}
								{link ? <a href={link || ''}>{lang['ru'].link}</a> : ''}
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
		</Carousel>
	);
}
