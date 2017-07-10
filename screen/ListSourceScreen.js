import React from 'react';
import {FlatList, View, ActivityIndicator, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements'
import {getNews} from '../api'

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={() => {
      props.onPress()
    }}>
      <View
        style={{
        paddingVertical: 8,
        paddingHorizontal: 8,
        flexDirection: 'column'
      }}>
        <Text h4>{props.data.name}</Text>
        <Text >{props.data.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default class ListSourceScreen extends React.Component {

  state = {
    source: [],
    loading: true
  }

  componentDidMount() {
    getNews().then(result => {
      console.log('result: ', result)
      this.setState({source: result, loading: false})
    })
  }

  onItemPress = (item) => {
    this
      .props
      .navigation
      .navigate('ListNews', item)
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        {this.state.loading
          ? <ActivityIndicator/>
          : <FlatList
            data={this.state.source}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
            return <ListItem
              data={item}
              onPress={() => {
              this.onItemPress(item);
            }}/>
          }}/>
}
      </View>
    );
  }
}