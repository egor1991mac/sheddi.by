import React, { useContext } from 'react';
import { GlobalContext } from '../../store/context';
import { FaInstagram, FaFacebookF, FaTwitter, FaViber, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
export default function Social() {
	const { SOCIAL = [] } = useContext(GlobalContext);
	return (
		<ul className="social-icons">
			{SOCIAL.length &&
				SOCIAL.map(({ title = '', img = null, link = '', type = '' }, index) => {
					switch (type) {
						case 'inst': {
							return (
								<li key={`${index}_social`}>
									<a href={link} target="_blank" rel="noreferrer">
										{img != '/' || !img ? <img src={img} /> : <FaInstagram />}
									</a>
								</li>
							);
						}
						case 'fb': {
							return (
								<li key={`${index}_social`}>
									<a href={link} target="_blank" rel="noreferrer">
										{img != '/' || !img ? <img src={img} /> : <FaFacebookF />}
									</a>
								</li>
							);
						}
						case 'tw': {
							return (
								<li key={`${index}_social`}>
									<a href={link} target="_blank" rel="noreferrer">
										{img != '/' || !img ? <img src={img} /> : <FaTwitter />}
									</a>
								</li>
							);
						}
						case 'tl': {
							return (
								<li key={`${index}_social`}>
									<a href={link} target="_blank" rel="noreferrer">
										{img != '/' || !img ? <img src={img} /> : <FaTelegramPlane />}
									</a>
								</li>
							);
						}
						case 'vb': {
							return (
								<li key={`${index}_social`}>
									<a href={link} target="_blank" rel="noreferrer">
										{img != '/' || !img ? <img src={img} /> : <FaViber />}
									</a>
								</li>
							);
						}
						case 'wh': {
							return (
								<li key={`${index}_social`}>
									<a href={link} key={`${index}_social`} target="_blank" rel="noreferrer">
										{img != '/' || !img ? <img src={img} /> : <FaWhatsapp />}
									</a>
								</li>
							);
						}
						default: {
							return '';
						}
					}
				})}
		</ul>
	);
}
