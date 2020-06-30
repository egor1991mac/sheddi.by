import React, { useEffect, useState } from 'react';

export default function useCreatePortal(NamePortal) {
	const [ isRender, setRender ] = useState(false);

	useEffect(() => {
		const portal = document.createElement('div');
		portal.id = NamePortal;
		document.body.appendChild(portal);
		setRender(true);

		return () => {
			if (document.getElementById(NamePortal)) {
				document.getElementById(NamePortal).remove();
				setRender(false);
			}
		};
	}, []);

	return isRender;
}
