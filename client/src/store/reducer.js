import { IS_AUTH, OPEN_AUTH_DIALOG, MAIN_SLIDER_SLIDS } from './const';





export const Reducer = (state, { type = null, payload = null }) => {


    switch (type) {
        case IS_AUTH:
            {
                return state;
            }
        case OPEN_AUTH_DIALOG:
            {

                return {...state, OPEN_AUTH_DIALOG: !state[OPEN_AUTH_DIALOG] }
            }
        case MAIN_SLIDER_SLIDS:
            {

                return {...state, MAIN_SLIDER_SLIDS: payload }
            }
        default:
            {
                return state
            }
    }


}