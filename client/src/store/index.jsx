import React, { useReducer, useEffect } from 'react';
import { GlobalContext } from './context';
import { Reducer } from './reducer';
import { IS_AUTH, OPEN_AUTH_DIALOG, MAIN_SLIDER_SLIDS } from './const';

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
	const getMainSlids = () => {
		const demo = [
			{
				img: 'main_slider.jpg',
				title: 'slide 1',
				subtitle: 'Lorem ullamco sint consequat ea eu cillum consectetur quis cillum nostrud.',
				link: '/'
			},
			{
				img: 'main_slider1.png',
				title: 'slide 1',
				subtitle: 'Lorem ullamco sint consequat ea eu cillum consectetur quis cillum nostrud.',
				link: '/'
			},
			{
				img: 'main_slider2.png',
				title: 'slide 1',
				subtitle: 'Lorem ullamco sint consequat ea eu cillum consectetur quis cillum nostrud.',
				link: '/'
			}
		];
		dispatch({ type: MAIN_SLIDER_SLIDS, payload: demo });
	};
	useEffect(() => {
		getMainSlids();
		return () => {};
	}, []);

	return <GlobalContext.Provider value={{ ...state, onOpenAuthDialog }}> {children} </GlobalContext.Provider>;
}
