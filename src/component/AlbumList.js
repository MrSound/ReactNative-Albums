import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
    componentWillMount() {
        // fetch('https://rallycoding.herokuapp.com/api/music_albums')
        //     //.then((response) => response.json())
        //     //.then((responseData) => this.setState({ albums: responseData }));
        //     .then((response) => { console.log('Response 1 :', response); return response.json(); })
        //     .then((responseData) => console.log('Response 2 :', responseData));
        // //debugger;
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log('Response 3 :', response));
    }

    render() {
        return (
            <View>
                <Text>Album List !!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;
