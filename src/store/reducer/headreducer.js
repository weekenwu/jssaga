import {fromJS} from "immutable";

const defaultState = fromJS({
    focused:false
});

export const reducer = (state = defaultState,action) => {
    switch (action.type) {
        case 'HEADER_INPUT_FOCUSED':
            return state.set('focused',true);
        case 'HEADER_INPUT_BLUR':
            return state.set('focused',false);
        default:
            return state;
    }

}
