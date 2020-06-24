import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../../../store/context';
import SectionTitle from '../../../components/title/section_title';
import SectionSubTitle from '../../../components/title/section_subtitle';
import AccardionQuestion from '../../../components/accardion';
import BoxWhite from '../../../components/boxes/boxWhite';

export default function MainSectionQuestionAnwer() {
	const { MAIN_QUESTION_ANSWER = [] } = useContext(GlobalContext);
	return (
		MAIN_QUESTION_ANSWER.length && (
			<Container as="section">
				<BoxWhite>
					<SectionTitle>Вопрос ответ</SectionTitle>
					<SectionSubTitle>
						lorAd nostrud proident quis consequat velit adipisicing eiusmod elit excepteur.
					</SectionSubTitle>
					<AccardionQuestion data={MAIN_QUESTION_ANSWER} />
				</BoxWhite>
			</Container>
		)
	);
}
