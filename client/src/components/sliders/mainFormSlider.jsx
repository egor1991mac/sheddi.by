import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { GlobalContext } from '../../store/context';
import lang from './lang.json';
export default function MainFormSlider() {
	const { MAIN_SLIDER_SLIDS = null } = useContext(GlobalContext);
	console.log(MAIN_SLIDER_SLIDS);
	return (
		<Carousel>
			{MAIN_SLIDER_SLIDS &&
				MAIN_SLIDER_SLIDS.map(({ img = null, title = null, subtitle = null, link = null }, index) => {
					return (
						<Carousel.Item key={`${index}_mainSlider`}>
							<img className="d-block w-100" src={img || ''} alt={title || ''} />
							<Carousel.Caption>
								{title ? <h3>{title}</h3> : ''}
								{subtitle ? <p>{subtitle}</p> : ''}
								{link ? <a href={link || ''}>{lang[window.lang_key].link}</a> : ''}
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
		</Carousel>
	);
}
