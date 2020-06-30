import React, { useState, Fragment } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Collapse } from 'react-bootstrap';
export default function CustomCollapse({ title, children }) {
	const [ open, setOpen ] = useState(false);
	return (
		<Fragment>
			<a
				className="d-flex justify-content-between nav-link cursor p-0 align-items-center"
				onClick={(e) => {
					e.preventDefault();
					setOpen(!open);
				}}
			>
				<span>{title}</span>
				<MdKeyboardArrowDown
					size="21"
					style={{ transition: 'transform .3s', transform: `rotate(${!open ? '0deg' : '180deg'})` }}
				/>
			</a>
			<Collapse in={open}>
				<div id="d-flex flex-column">{children}</div>
			</Collapse>
		</Fragment>
	);
}
