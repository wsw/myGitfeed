import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './TabBar';
import {View} from 'react-native';
import About from './about';

class RootTab extends React.Component {
    render() {
        return <View style={{backgroundColor: 'white', flex: 1}}>
            <ScrollableTabView
                renderTabBar={() => <TabBar/>}
                tabBarPosition={'bottom'}
            >
            <About tabLabel={{tabName: 'Feed', iconName: 'ios-home'}}/>
            <About tabLabel={{tabName: 'Explore', iconName: 'ios-flame'}}/>
            <About tabLabel={{tabName: 'Famous', iconName: 'ios-people'}}/>
            <About tabLabel={{tabName: 'Me', iconName: 'ios-person'}}/>
            </ScrollableTabView>
        </View>
    }
}

export default RootTab;