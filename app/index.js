import RootTab from './components/RootTab';
import React, {Component} from 'react';
import {Navigator, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeLoginStateAysnc, getLoginStateAysnc} from './actions/login';
import * as types from './actions/ActionTypes';
import Onboard from './components/Onboard';

class Index extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
         const {dispatch} = this.props;
         dispatch(getLoginStateAysnc());
    }
    changeState(value) {
        const {dispatch} = this.props;
        dispatch(changeLoginStateAysnc(value));
    }
    render() {
        console.log(this.props.login.state)
        const {login} = this.props;
        if (login.state == types.LOGIN_STATE_LIST.PEDDING) {
            return <Onboard changeLoginState={this.changeState.bind(this)}/>;
        } else if (login.state == types.LOGIN_STATE_LIST.ONBOARD) {
            return <RootTab />
        }
       
    }
}

function mapStateToProps(state) {
    return {login: state.login};
}

function mapDispatchToProps(dispatch) {
    return {
        changeStateAction: bindActionCreators({changeLoginStateAysnc}, dispatch),
        getDefaultState: bindActionCreators({getLoginStateAysnc}, dispatch)
    }
}

export default connect(mapStateToProps)(Index);