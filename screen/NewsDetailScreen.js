import React from 'react';
import {View, WebView} from 'react-native'

export default class NewsDetailScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({title: `${navigation.state.params.title}`});

  render() {
    console.log('navigation detail: ', this.props.navigation)
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <WebView
          source={{
          uri: this.props.navigation.state.params.url
        }}/>
      </View>
    );
  }
}