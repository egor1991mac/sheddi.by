import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import lang from './lang';
export default function LogginForm() {
	return (
		<Form>
			<Form.Group controlId="formAuth">
				<Form.Label>{lang[window.lang_key].email.label}</Form.Label>
				<Form.Control required type="email" placeholder={lang[window.lang_key].email.placeholder} />
				<Form.Text className="text-muted">{lang[window.lang_key].email.text}</Form.Text>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>{lang[window.lang_key].password.label}</Form.Label>
				<Form.Control required type="password" placeholder={lang[window.lang_key].password.placeholder} />
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label={lang[window.lang_key].check} />
			</Form.Group>
			<Button variant="primary" type="submit">
				{lang[window.lang_key].submit}
			</Button>
		</Form>
	);
}
