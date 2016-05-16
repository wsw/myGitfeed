import * as types from './ActionTypes';

export function changeLoginState(state) {
    return {
        type: types.CHANGE_LOGIN_STATE,
        state: state
    }
}

function getLoginState() {
    return {
        type: tpes.GET_LOGIN_STATE
    }
}