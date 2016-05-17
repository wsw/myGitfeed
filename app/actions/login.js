import * as types from './ActionTypes';

const LOGIN_STATE = 'loginState';

AsyncStorage.getItem(LOGIN_STATE).then((value) => {
    if (value == null) {
        AsyncStorage.setItem(LOGIN_STATE, {state: 0});
    }
}).catch(error => {}).done();

export function changeLoginState(value) {
    return {
        type: types.CHANGE_LOGIN_STATE,
        login: value
    }
}

function getLoginState(value) {
    return {
        type: tpes.GET_LOGIN_STATE,
        login: value
    }
}

function getLoginStateAysnc(params) {
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