import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import lang from './lang';

export default function MainSearchForm({language='ru'}) {
	return (
        <>
        <h2 className={"text-6 mb-4"}>
            {lang['ru'].title}
        </h2>
		<Form id="bookingBus" className="d-block">
            
			<Form.Group controlId="departure">
				<Form.Label className="">{lang[language].departure.label}</Form.Label>
				<Form.Control type="text" placeholder={lang['ru'].departure.placeholder} />
			</Form.Group>
			    <Form.Group  controlId="arrival">
				<Form.Label className="">{lang[language].arrival.label}</Form.Label>
				<Form.Control type="text" placeholder={lang['ru'].arrival.placeholder} />
			</Form.Group>
            
         
            <Form.Group controlId="date_departure">
				<Form.Label className="">{lang[language].date_departure.label}</Form.Label>
				<Form.Control type="text" placeholder={lang['ru'].date_departure.placeholder} />
			</Form.Group>
            
           
			<Form.Group controlId="seats">
				<Form.Label className="">{lang[language].seats.label}</Form.Label>
				<Form.Control type="text" placeholder={lang[language].seats.placeholder} />
			</Form.Group>
            
			<Button variant="primary" type="submit">
				{lang[language].submit}
			</Button>
		</Form>
        </>
	);
}
