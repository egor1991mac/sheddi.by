import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../../store/context';
import { MdPlace, MdLocalPhone, MdLocalPostOffice } from 'react-icons/md';
import { List, ListGroup } from 'react-bootstrap';
export default function Contact() {
	const { CONTACT = [] } = useContext(GlobalContext);

	return (
		<Fragment>
			{CONTACT.length && (
				<ListGroup bsPrefix="contact-list">
					{CONTACT.map(({ type, link, text }, index) => {
						switch (type) {
							case 'tel': {
								return (
									<ListGroup.Item bsPrefix="contact-list--item" key={`${index}_contact`}>
										<MdLocalPhone /> <a href={`${type}:${link}`}> {text} </a>
									</ListGroup.Item>
								);
							}
							case 'vb': {
								return (
									<ListGroup.Item bsPrefix="contact-list--item" key={`${index}_contact`}>
										<MdLocalPhone /> <a href={`${type}:${link}`}> {text} </a>
									</ListGroup.Item>
								);
							}
							case 'tl': {
								return (
									<ListGroup.Item bsPrefix="contact-list--item" key={`${index}_contact`}>
										<MdLocalPhone /> <a href={`${type}:${link}`}> {text} </a>
									</ListGroup.Item>
								);
							}
							case 'wh': {
								return (
									<ListGroup.Item bsPrefix="contact-list--item" key={`${index}_contact`}>
										<MdLocalPhone /> <a href={`${type}:${link}`}> {text} </a>
									</ListGroup.Item>
								);
							}
							case 'mail': {
								return (
									<ListGroup.Item bsPrefix="contact-list--item" key={`${index}_contact`}>
										<MdLocalPostOffice /> <a href={`${type}:${link}`}> {text} </a>
									</ListGroup.Item>
								);
							}
							case 'map': {
								return (
									<ListGroup.Item bsPrefix="contact-list--item" key={`${index}_contact`}>
										<MdPlace /> <a href={`${type}:${link}`}> {text} </a>
									</ListGroup.Item>
								);
							}
							default: {
								return '';
							}
						}
					})}
				</ListGroup>
			)}
		</Fragment>
	);
}
