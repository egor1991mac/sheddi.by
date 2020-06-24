import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Tabs, Tab, Button } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import { MdClose } from 'react-icons/md';
import LogginForm from '../../forms/logginForm';
import RegForm from '../../forms/regForm';

const AuthDialog = () => {
	const { state, OPEN_AUTH_DIALOG, onOpenAuthDialog = null, lang = 'ru' } = useContext(GlobalContext);

	useEffect(() => {
		const portal = document.createElement('div');
		portal.id = 'portal';
		document.body.appendChild(portal);
		return () => {
			document.body.remove(portal);
		};
	}, []);

	return (
		typeof document !== 'undefined' &&
		document.getElementById('portal') &&
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
			document.getElementById('portal')
		)
	);
};

export default AuthDialog;
