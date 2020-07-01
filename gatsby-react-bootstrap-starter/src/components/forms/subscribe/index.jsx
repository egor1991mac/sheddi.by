import React, { Fragment } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
export default function SubscribeForm() {
	return (
		<Fragment>
			<Form>
				<Row noGutters className="input-group ">
					<Col>
						<Form.Control size="sm" className="h-100" />
					</Col>
					<Col xs="auto" className="input-group-append">
						<Button variant="secondary" size="sm" type="submit">
							Подписаться
						</Button>
					</Col>
				</Row>
			</Form>
		</Fragment>
	);
}
