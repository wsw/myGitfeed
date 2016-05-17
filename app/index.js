import RootTab from './components/RootTab';
import React, {Component} from 'react';
import {Navigator, View} from 'react-native';
import {connect} from 'react-redux';
import {changeLoginStateAysnc} from './actions/login';

class Index extends Component {
    constructor() {
        
    }
    
    render() {
        return <RootTab />
    }
}

function mapStateToProps(state) {
  return {login: state.login};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLoginStateAysnc}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);