import RootTab from './components/RootTab';
import React, {Component} from 'react';
import {Navigator, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from './actions/login';
import Onboard from './components/Onboard';
import Loading from './common/loading';
import {
    GET_LOGIN_STATE,
    LOGIN_STATE_LIST,
    CHANGE_LOGIN_STATE
} from './actions/ActionTypes';

class Index extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
         this.props.getLoginStateAysnc();
    }
    changeState(value) {
        this.props.changeLoginStateAysnc(value);
    }
    render() {
        const {login} = this.props;
        
        console.log(login)
        
        switch (login.state) {
            case LOGIN_STATE_LIST.PEDDING:
                return <Loading />
            case LOGIN_STATE_LIST.ONBOARD:
                return <RootTab username={login.username} />
            case LOGIN_STATE_LIST.UNONBOARD:
                return <Onboard changeLoginState={this.changeState.bind(this)}/>;
            default :
                return <Loading />
        }
       
    }
}

export default connect((state) => {
    return {login: state.login};
}, (dispatch) => {
    return bindActionCreators(loginActions, dispatch);
})(Index);