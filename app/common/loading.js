import React from 'react';
import CommonStyles from '../style/common';
import {
    View, ProgressBarAndroid
} from 'react-native';

class Loading extends React.Component {
    render() {
        return <View style={CommonStyles.container}>
            <ProgressBarAndroid styleAttr="Inverse" />
        </View>
    }
}

export default Loading;