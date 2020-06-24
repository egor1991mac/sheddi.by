import React, { useReducer, useEffect } from 'react';
import { GlobalContext } from './context';
import { Reducer } from './reducer';
import {
	IS_AUTH,
	OPEN_AUTH_DIALOG,
	MAIN_SLIDER_SLIDS,
	MAIN_BEST_OFFERS,
	MAIN_WHY_WE_ARE,
	MAIN_QUESTION_ANSWER,
	MAIN_NEWS
} from './const';
import demo from './demo.json';

export default function GlobalState({ children }) {
	const [ state, dispatch ] = useReducer(Reducer, defaultState);

	//authDialog
	const onOpenAuthDialog = () => {
		dispatch({ type: OPEN_AUTH_DIALOG, payload: null });
	};
	//main slider

	return (
		<GlobalContext.Provider value={{ ...state, onOpenAuthDialog, lang: 'ru' }}> {children} </GlobalContext.Provider>
	);
}

const defaultState = {
	IS_AUTH: false,
	OPEN_AUTH_DIALOG: false,
	MAIN_SLIDER_SLIDS: demo.main_slider,
	MAIN_BEST_OFFERS: demo.main_best_offers,
	MAIN_WHY_WE_ARE: demo.main_why_we_are,
	MAIN_QUESTION_ANSWER: demo.main_question_answer,
	MAIN_NEWS: demo.news
};
