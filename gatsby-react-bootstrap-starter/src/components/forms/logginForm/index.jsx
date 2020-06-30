import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import lang from './lang';
export default function LogginForm({ language = 'ru' }) {
	return (
		<Form>
			<Form.Group controlId="formAuth">
				<Form.Label>{lang[language].email.label}</Form.Label>
				<Form.Control required type="email" placeholder={lang['ru'].email.placeholder} />
				<Form.Text className="text-muted">{lang['ru'].email.text}</Form.Text>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>{lang[language].password.label}</Form.Label>
				<Form.Control required type="password" placeholder={lang['ru'].password.placeholder} />
			</Form.Group>
			<Form.Row className="justify-content-center">
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label={lang['ru'].check} />
				</Form.Group>
			</Form.Row>
			<Button variant="primary" type="submit" className="btn-block">
				{lang[language].submit}
			</Button>
		</Form>
	);
}
