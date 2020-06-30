import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import lang from './lang.json';
export default function RegForm({ language = 'ru' }) {
	return (
		<Form>
			<Form.Group controlId="RegForm">
				<Form.Label>{lang[language].email.label}</Form.Label>
				<Form.Control type="email" placeholder={lang['ru'].email.placeholder} />
				<Form.Text required className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>{lang[language].password.label}</Form.Label>
				<Form.Control required type="password" placeholder={lang['ru'].password.placeholder} />
			</Form.Group>

			<Button variant="primary" type="submit" className="btn-block">
				{lang[language].submit}
			</Button>
		</Form>
	);
}
