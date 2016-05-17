import * as types from '../actions/ActionTypes';
import {asyncStorage} from 'react-native';

const loginState = {
    state: types.LOGIN_STATE_LIST.PEDDING
}

export default function login(state = loginState, action) {
    switch (action.type) {
        case types.GET_LOGIN_STATE: 
        case types.CHANGE_LOGIN_STATE:
           return Object.assign({}, state, {state: action.state});
        default:
            return state;
    }
}