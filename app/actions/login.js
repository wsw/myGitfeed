import * as types from './ActionTypes';
import {AsyncStorage} from 'react-native';

const LOGIN_STATE = 'loginState';

AsyncStorage.getItem(LOGIN_STATE).then((value) => {
    if (value == null) {
        AsyncStorage.setItem(LOGIN_STATE, types.LOGIN_STATE_LIST.ONBOARD);
    }
}).catch(error => {}).done();

function changeLoginState(value) {
    return {
        type: types.CHANGE_LOGIN_STATE,
        state: value
    }
}

function getLoginState(value) {
    return {
        type: types.GET_LOGIN_STATE,
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