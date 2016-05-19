import {
    CHANGE_LOGIN_STATE,
    GET_LOGIN_STATE,
    LOGIN_STATE_LIST
} from './ActionTypes';
import {AsyncStorage} from 'react-native';

const LOGIN_STATE = 'loginState';

AsyncStorage.getItem(LOGIN_STATE).then((value) => {
    if (value == null) {
        let login = {state: LOGIN_STATE_LIST.UNONBOARD, username: ''};
        AsyncStorage.setItem(LOGIN_STATE, JSON.stringify(login));
    }
}).catch(error => {}).done();

function changeLoginState(value, login) {
    return {
        type: CHANGE_LOGIN_STATE,
        state: login.value,
        username: login.username
    }
}

function getLoginState() {
    return {
        type: GET_LOGIN_STATE
    }
}

function getLoginStateAysnc() {
    return (dispatch, getState) => {
        AsyncStorage.getItem(LOGIN_STATE).then(value => {
            dispatch(getLoginState(JSON.parse(value)));
        }).catch(error => {}).done();
    }
}

function changeLoginStateAysnc(login) {
    return (dispatch, getState) => {
        AsyncStorage.setItem(LOGIN_STATE, JSON.stringify(login)).then(() => {
            dispatch(changeLoginState(login));
        }).catch(error => {}).done();
    }
}

export {getLoginStateAysnc, changeLoginStateAysnc};