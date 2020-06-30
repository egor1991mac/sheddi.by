import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Tabs, Tab, Button } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import { MdClose } from 'react-icons/md';
import LogginForm from '../../forms/logginForm';
import RegForm from '../../forms/regForm';
import { isNullableType } from 'graphql';

const AuthDialog = () => {
	const { state, OPEN_AUTH_DIALOG, onOpenAuthDialog = null, lang = 'ru' } = useContext(GlobalContext);
	const [ isRender, setRender ] = useState(false);

	useEffect(() => {
		const NamePortal = 'AuthPortal';
		if (OPEN_AUTH_DIALOG) {
			const portal = document.createElement('div');
			portal.id = NamePortal;
			document.body.appendChild(portal);
			setRender(true);
		} else {
			if (document.getElementById(NamePortal)) {
				document.getElementById(NamePortal).remove();
				setRender(false);
			}
		}
		return () => {
			if (document.getElementById(NamePortal)) {
				document.getElementById(NamePortal).remove();
				setRender(false);
			}
		};
	}, []);
	return isRender
		? typeof document !== 'undefined' &&
			document.getElementById('AuthPortal') &&
			createPortal(
				<div>
					<Modal id="authDialog" show={OPEN_AUTH_DIALOG}>
						<Modal.Body>
							<Button onClick={() => onOpenAuthDialog()} className="btn-clear btn-close-dialog">
								<MdClose size="21px" />
							</Button>
							<Tabs className="text-4 justify-content-center mt-2 mb-4">
								<Tab.Pane eventKey="login" title="Авторизация">
									<LogginForm language={lang} />
								</Tab.Pane>
								<Tab.Pane eventKey="reg" title="Регистрация">
									<RegForm language={lang} />
								</Tab.Pane>
							</Tabs>
						</Modal.Body>
					</Modal>
				</div>,
				document.getElementById('AuthPortal')
			)
		: null;
};

export default AuthDialog;
