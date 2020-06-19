import { IS_AUTH, OPEN_AUTH_DIALOG } from './const';





export const Reducer = (state, { type = null, payload = null }) => {


    switch (type) {
        case IS_AUTH:
            {
                return state;
            }
        case OPEN_AUTH_DIALOG:
            {
                console.log(state)
                return {...state, OPEN_AUTH_DIALOG: !state[OPEN_AUTH_DIALOG] }
            }
        default:
            {
                return state
            }
    }


}