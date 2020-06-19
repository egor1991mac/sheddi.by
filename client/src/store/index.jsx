import React, { useReducer } from 'react';
import { GlobalContext } from './context';
import { Reducer } from './reducer';
import { IS_AUTH, OPEN_AUTH_DIALOG } from './const';

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

	return <GlobalContext.Provider value={{ ...state, onOpenAuthDialog }}> {children} </GlobalContext.Provider>;
}
