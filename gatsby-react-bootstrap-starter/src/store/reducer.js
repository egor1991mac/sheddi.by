import { IS_AUTH, OPEN_AUTH_DIALOG, MAIN_SLIDER_SLIDS, TOGGLE_MOBILE_NAV, SHOW_MORE_ROUTES, ROUTES } from './const';

export const Reducer = (state, { type = null, payload = null }) => {
    switch (type) {
        case IS_AUTH:
            {
                return state;
            }
        case OPEN_AUTH_DIALOG:
            {
                return {...state, OPEN_AUTH_DIALOG: !state[OPEN_AUTH_DIALOG] };
            }
        case TOGGLE_MOBILE_NAV:
            {
                return {...state, TOGGLE_MOBILE_NAV: !state[TOGGLE_MOBILE_NAV] };
            }
        case MAIN_SLIDER_SLIDS:
            {
                return {...state, MAIN_SLIDER_SLIDS: payload };
            }
        case SHOW_MORE_ROUTES:
            {
                console.log(payload);
                return {...state, ROUTES: {...state.ROUTES, nowShowRoutes: payload } };
            }

        default:
            {
                return state;
            }
    }
};