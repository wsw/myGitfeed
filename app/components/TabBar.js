import colors from '../style/colors';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View,
    TouchableOpacity, Animated} from 'react-native';
    
    //var Icon = require('react-native-vector-icons/Ionicons');
    
let styles = StyleSheet.create({
    tab: {
        flex: 1, alignItems: 'center', 
        justifyContent: 'center'
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    tabs: {
        height: 49, flexDirection: 'row',
        paddingTop: 5, borderTopWidth: 0.5,
        borderTopColor: colors.backGray
    }
});

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.selectedTabIcons = [];
        this.unselectedTabIcons = [];
    }
    renderTabOption(name, page) {
        let isTabActive = this.props.activeTab === page;
        const color = isTabActive ? colors.blue : colors.textGray;
        const tabName = name.tabName;
        const iconName = name.iconName;
        
        console.log(this.selectedTabIcons);
        
        return (
            <TouchableOpacity 
                key={tabName}
                onPress={() => this.props.goToPage(page)}
                style={styles.tab}
                key={page} >
                <View
                    //ref={(icon) => { this.selectedTabIcons[page] = icon}}
                    style={styles.tabItem}>
                    <Icon name={iconName} color={color} size={20} />
                    <Text style={[styles.icon, {color: color}]}>{tabName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View>
                <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                </View>
            </View>
        )
    }
    //  setAnimationValue({value}) {
    //      var currentPage = this.props.activeTab;
    //      this.unselectedTabIcons.forEach((icon, i) => {
    //          var iconRef = icon;
    //          if (!icon.setNativeProps && icon != null) {
    //              iconRef = icon.refs.icon_image;
    //          }
    //          if (value - i >= 0 && value - i <= 1) {
    //             iconRef.setNativeProps({opacity: value - i});
    //          }
    //          if (i - value >= 0 &&  i - value <= 1) {
    //              iconRef.setNativeProps({opacity: i - value});
    //          }
    //      })
    //  }
}

export default TabBar;