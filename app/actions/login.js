import {
    CHANGE_LOGIN_STATE,
    GET_LOGIN_STATE,
    LOGIN_STATE_LIST
} from './ActionTypes';
import {AsyncStorage} from 'react-native';

const LOGIN_STATE = 'loginState';

AsyncStorage.getItem(LOGIN_STATE).then((value) => {
    if (value == null) {
        AsyncStorage.setItem(LOGIN_STATE, LOGIN_STATE_LIST.ONBOARD);
    }
}).catch(error => {}).done();

function changeLoginState(value) {
    return {
        type: CHANGE_LOGIN_STATE,
        state: value
    }
}

function getLoginState(value) {
    return {
        type: GET_LOGIN_STATE,
        state: value
    }
}

function getLoginStateAysnc() {
    return (dispatch, getState) => {
        AsyncStorage.getItem(LOGIN_STATE).then(value => {
            dispatch(getLoginState(value));
        }).catch(error => {}).done();
    }
}

function changeLoginStateAysnc(value) {
    return (dispatch, getState) => {
        AsyncStorage.setItem(LOGIN_STATE, value).then(() => {
            dispatch(changeLoginState(value));
        }).catch(error => {}).done();
    }
}

export {getLoginStateAysnc, changeLoginStateAysnc};