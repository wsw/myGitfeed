import {
    LOGIN_STATE_LIST,
    GET_LOGIN_STATE,
    CHANGE_LOGIN_STATE
} from '../actions/ActionTypes';
import {asyncStorage} from 'react-native';

const loginState = {
    state: LOGIN_STATE_LIST.PEDDING,
    username: ''
}

export default function login(state = loginState, action) {
    switch (action.type) {
        case GET_LOGIN_STATE: 
        case CHANGE_LOGIN_STATE:
           return Object.assign({}, state, {
               state: action.state,
               username: action.username
            });
        default:
            return state;
    }
}