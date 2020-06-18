import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Tabs, Tab, Button } from 'react-bootstrap';
import LogginForm from './forms/logginForm';
import RegForm from './forms/regForm';
const AuthDialog = () => {
	const [ show, setShow ] = useState(true);
	return createPortal(
		<div>
			<Modal id="authDialog" show={show}>
				<Modal.Body>
					<Button onClick={() => setShow(!show)} className="btn-close-dialog">
						X
					</Button>
					<Tabs className="text-4 justify-content-center mt-2 mb-4">
						<Tab.Pane eventKey="login" title="Авторизация">
							<LogginForm />
						</Tab.Pane>
						<Tab.Pane eventKey="reg" title="Регистрация">
							<RegForm />
						</Tab.Pane>
					</Tabs>
				</Modal.Body>
			</Modal>
		</div>,
		document.getElementById('portal')
	);
};

export default AuthDialog;
