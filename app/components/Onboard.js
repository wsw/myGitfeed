import React from 'react';
import * as types from '../actions/ActionTypes';
import Colors from '../style/colors';
import {
    StyleSheet, View, Text,
    TouchableHighlight,
    TextInput, Image,
    ScrollView, ProgressBarAndroid
} from 'react-native';

class Onboard extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            username: '',
            loadingError: null,
            loading: false
        }
    }
    submitOnboard() {
        if (this.state.username.length == 0) {
            return;
        }
        this.setState({
            loadingError: null,
            loading: true
        });
        
        setTimeout(() => {
            this.setState({
                loading: false
            });
            console.log('board', types.LOGIN_STATE_LIST.ONBOARD)
            this.props.changeLoginState(types.LOGIN_STATE_LIST.ONBOARD)
        }, 3000);
    }
    onUserNameChange(text) {
        this.setState({
            username: text
        });
    }
    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={[styles.container]}>
                    <Image 
                        style={styles.welcomeImage}
                        source={require('../../icon/ios/iTunesArtwork.png')} />
                    <View style={styles.loginContainer}>
                        <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            style={styles.textInput}
                            returnKeyType={'done'}
                            onChangeText={this.onUserNameChange.bind(this)}
                            //onSubmitEditing={this.submitOnboard}
                            placeholder={'Github username not email'}
                        />
                        <TouchableHighlight
                            style={styles.go}
                            onPress={this.submitOnboard.bind(this)}
                            underlayColor={Colors.backGray}
                            >
                            <Text style={[styles.nameAndPwd, {'textAlign': 'center'}]}>
                                Go!
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    flexDirection: 'column',
    alignItems: 'center',
    height: 300,
    backgroundColor: 'white',
  },

  welcomeImage: {
    width: 150,
    height: 150,
    backgroundColor: Colors.backGray,
  },

  loginContainer: {
    flexDirection: 'row',
    margin: 30,
    height: 44,
    alignSelf: 'stretch',
    marginTop: 20,
  },

  textInput: {
    margin: 5,
    fontSize: 15,
    borderWidth: 1,
    height: 40,
    alignSelf: 'stretch',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 4,
    padding: 5,
    borderColor: Colors.borderColor,
    flex: 1,
  },

  go: {
    margin: 5,
    marginBottom: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 4,
    borderColor: Colors.borderColor,
  },

  nameAndPwd: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    width: 40,
  },
});

export default Onboard;