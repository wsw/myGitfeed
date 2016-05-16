import * as types from '../actions/ActionTypes';

const loginState = {
    // pedding: 0,
    // onboard: 1,
    // unOnboard: 2,
    // needLogin: 3
    state: 0
}

export default function login(state = loginState, action) {
    switch (action.type) {
        case types.GET_LOGIN_STATE: 
            return state;
        case types.CHANGE_LOGIN_STATE:
            return Object.assign({}, state, {
                state: action.state
            });
        default:
            return state;
    }
}