import React, { useEffect, useState, useRef } from 'react';
import useWindowScroll from '../../hooks/useWindowScroll';

const ScrollContainer = ({ children }) => {
	const componentRef = useRef(null);
	const position = useWindowScroll(componentRef);

	return <div>{React.cloneElement(children, { ref: componentRef })}</div>;
};

export default ScrollContainer;
