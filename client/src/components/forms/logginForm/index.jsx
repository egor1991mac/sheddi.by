import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import lang from './lang';
export default function LogginForm() {
	const [ show, setShow ] = useState(true);
	console.log(lang[window.lang_key].email);
	return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label />
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
