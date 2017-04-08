// 1. Import library for making component
import React from 'react';
import { Text, View } from 'react-native';
// 2. Make a component
const Header = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20
    }
};
// 3. Make the component available to other part of the app
export default Header;
