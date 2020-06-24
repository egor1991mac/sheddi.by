import React, { useReducer, useEffect } from 'react';
import { GlobalContext } from './context';
import { Reducer } from './reducer';
import { IS_AUTH, OPEN_AUTH_DIALOG, MAIN_SLIDER_SLIDS } from './const';
//import demo from './demo.json';

const defaultState = {
	IS_AUTH: false,
	OPEN_AUTH_DIALOG: false
};

export default function GlobalState({ children }) {
	const [ state, dispatch ] = useReducer(Reducer, defaultState);

	//authDialog
	const onOpenAuthDialog = () => {
		dispatch({ type: OPEN_AUTH_DIALOG, payload: null });
	};

	//mainFormSlider
	// const getMainSlids = () => {
	// 	dispatch({ type: MAIN_SLIDER_SLIDS, payload: demo.main_slider });
	// };
	useEffect(() => {
		//getMainSlids();
		return () => {};
	}, []);

	return (
		<GlobalContext.Provider value={{ ...state, onOpenAuthDialog, lang: 'ru' }}> {children} </GlobalContext.Provider>
	);
}
