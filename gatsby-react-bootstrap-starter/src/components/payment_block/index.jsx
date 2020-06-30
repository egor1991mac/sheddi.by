import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../../store/context';

export default function PaymentBlock() {
	const { PAYMENT = [] } = useContext(GlobalContext);

	return (
		<Fragment>
			{PAYMENT.length &&
				PAYMENT.map(({ title, img, link }, index) => (
					<a href={link} key={`${index}_payment`} target="_blank">
						<img src={img} alt={title} height="35px" className="px-1" />
					</a>
				))}
		</Fragment>
	);
}
