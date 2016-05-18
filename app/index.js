import RootTab from './components/RootTab';
import React, {Component} from 'react';
import {Navigator, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from './actions/login';
import * as types from './actions/ActionTypes';
import Onboard from './components/Onboard';
import Loading from './common/loading';

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
        
        switch (login.state) {
            case types.LOGIN_STATE_LIST.PEDDING:
                return <Loading />
            case types.LOGIN_STATE_LIST.ONBOARD:
                return <RootTab />
            case types.LOGIN_STATE_LIST.UNONBOARD:
                return <Onboard changeLoginState={this.changeState.bind(this)}/>;
            default :
                return <Loading />
        }
       
    }
}

function mapStateToProps(state) {
    return {login: state.login};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(loginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);