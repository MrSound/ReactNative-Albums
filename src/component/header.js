// 1. Import library for making component
import React from 'react';
import { Text, View, Platform } from 'react-native';
// 2. Make a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8', //F8F8F8
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        ...Platform.select({
            ios: {
                shadowColor: '#ff0000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 2,
                position: 'relative'
            }
        }),
    },
    textStyle: {
        fontSize: 20,
        color: '#000'
    }
};
// 3. Make the component available to other part of the app
export default Header;
