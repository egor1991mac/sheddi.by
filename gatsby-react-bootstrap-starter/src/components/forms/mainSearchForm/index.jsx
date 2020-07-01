import React, { Fragment } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import lang from './lang';
import { MdPlace, MdDateRange, MdPeople } from 'react-icons/md';

function MainSearchForm({ language = 'ru', type = null }, ref) {
	if (type != 'hor') {
		return (
			<Fragment>
				<h2 className={'text-6 mb-4'}>{lang['ru'].title}</h2>
				<Form id="bookingBus" className="d-block">
					<Form.Row>
						<Form.Group as={Col} controlId="departure" className="position-relative">
							{/* <Form.Label className="">{lang[language].departure.label}</Form.Label> */}
							<Form.Control type="text" placeholder={lang['ru'].departure.placeholder} />
							<span className="icon-inside">
								<MdPlace />
							</span>
						</Form.Group>
						<Form.Group as={Col} controlId="arrival" className="position-relative">
							{/* <Form.Label className="">{lang[language].arrival.label}</Form.Label> */}
							<Form.Control type="text" placeholder={lang['ru'].arrival.placeholder} />
							<span className="icon-inside">
								<MdPlace />
							</span>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="date_departure" className="position-relative">
							{/* <Form.Label className="">{lang[language].date_departure.label}</Form.Label> */}
							<Form.Control type="text" placeholder={lang['ru'].date_departure.placeholder} />
							<span className="icon-inside">
								<MdDateRange />
							</span>
						</Form.Group>
						<Form.Group as={Col} controlId="date_arrival" className="position-relative">
							{/* <Form.Label className="">{lang[language].date_departure.label}</Form.Label> */}
							<Form.Control disabled type="text" placeholder={lang['ru'].date_departure.placeholder} />
							<span className="icon-inside">
								<MdDateRange />
							</span>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="seats" className="position-relative">
						{/* <Form.Label className="">{lang[language].seats.label}</Form.Label> */}
						<Form.Control type="text" placeholder={lang[language].seats.placeholder} />
						<span className="icon-inside">
							<MdPeople />
						</span>
					</Form.Group>

					<Button variant="primary" type="submit" className="btn-block">
						{lang[language].submit}
					</Button>
				</Form>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<Form id="bookingBus" className="d-block" ref={ref}>
					<Form.Row>
						<Form.Group controlId="departure" className="position-relative col-sm-6 col-lg">
							{/* <Form.Label className="">{lang[language].departure.label}</Form.Label> */}
							<Form.Control type="text" placeholder={lang['ru'].departure.placeholder} />
							<span className="icon-inside">
								<MdPlace />
							</span>
						</Form.Group>
						<Form.Group controlId="arrival" className="position-relative col-sm-6 col-lg">
							{/* <Form.Label className="">{lang[language].arrival.label}</Form.Label> */}
							<Form.Control type="text" placeholder={lang['ru'].arrival.placeholder} />
							<span className="icon-inside">
								<MdPlace />
							</span>
						</Form.Group>

						<Form.Group controlId="date_departure" className="position-relative col-sm-6 col-lg">
							{/* <Form.Label className="">{lang[language].date_departure.label}</Form.Label> */}
							<Form.Control type="text" placeholder={lang['ru'].date_departure.placeholder} />
							<span className="icon-inside">
								<MdDateRange />
							</span>
						</Form.Group>
						<Form.Group controlId="date_arrival" className="position-relative col-sm-6 col-lg">
							{/* <Form.Label className="">{lang[language].date_departure.label}</Form.Label> */}
							<Form.Control disabled type="text" placeholder={lang['ru'].date_arrival.placeholder} />
							<span className="icon-inside">
								<MdDateRange />
							</span>
						</Form.Group>

						<Form.Group controlId="seats" className="position-relative col-sm-6 col-lg">
							{/* <Form.Label className="">{lang[language].seats.label}</Form.Label> */}
							<Form.Control type="text" placeholder={lang[language].seats.placeholder} />
							<span className="icon-inside">
								<MdPeople />
							</span>
						</Form.Group>
						<Form.Group className="position-relative col-sm-6 col-lg">
							<Button variant="primary" type="submit" className="btn-block">
								{lang[language].submit}
							</Button>
						</Form.Group>
					</Form.Row>
				</Form>
			</Fragment>
		);
	}
}

export default React.forwardRef(MainSearchForm);
