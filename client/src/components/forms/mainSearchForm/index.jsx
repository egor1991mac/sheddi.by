import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import lang from './lang';

export default function MainSearchForm() {
	return (
        <>
        <h2 className={"text-6 mb-4"}>
            {lang[window.lang_key].title}
        </h2>
		<Form id="bookingBus" className="d-block">
            
			<Form.Group controlId="departure">
				<Form.Label className="">{lang[window.lang_key].departure.label}</Form.Label>
				<Form.Control type="text" placeholder={lang[window.lang_key].departure.placeholder} />
			</Form.Group>
			    <Form.Group  controlId="arrival">
				<Form.Label className="">{lang[window.lang_key].arrival.label}</Form.Label>
				<Form.Control type="text" placeholder={lang[window.lang_key].arrival.placeholder} />
			</Form.Group>
            
         
            <Form.Group controlId="date_departure">
				<Form.Label className="">{lang[window.lang_key].date_departure.label}</Form.Label>
				<Form.Control type="text" placeholder={lang[window.lang_key].date_departure.placeholder} />
			</Form.Group>
            
           
			<Form.Group controlId="seats">
				<Form.Label className="">{lang[window.lang_key].seats.label}</Form.Label>
				<Form.Control type="text" placeholder={lang[window.lang_key].seats.placeholder} />
			</Form.Group>
            
			<Button variant="primary" type="submit">
				{lang[window.lang_key].submit}
			</Button>
		</Form>
        </>
	);
}
