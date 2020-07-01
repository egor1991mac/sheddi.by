import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import useCreatePortal from '../../../hooks/useCreatePortal';
import useClickOutside from '../../../hooks/useClickOutside';
import Slide from 'react-reveal/Fade';

import './style.scss';

const Drawer = ({ children, callback, styles }) => {
	//createPortal
	const NamePortal = 'DrawerPortal';
	const isRender = useCreatePortal(NamePortal);

	const ref = useRef(null);
	useClickOutside(ref, () => callback());
	//render
	return isRender
		? typeof document !== 'undefined' &&
			document.getElementById(NamePortal) &&
			createPortal(
				<div className="drawer-Wrapper" style={styles}>
					<div ref={ref} className="drawer-Container">
						<div className="drawer-header p-2">
							<button className={'btn-clear btn-animate text-white  ml-auto'} onClick={callback}>
								<MdClose size="28" className="" />
							</button>
						</div>

						{children}
					</div>
				</div>,
				document.getElementById(NamePortal)
			)
		: null;
};

export default Drawer;
