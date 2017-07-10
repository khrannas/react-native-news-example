import React from 'react';
import {FlatList, View, ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native'
import {Text, Card, ListItem, Button} from 'react-native-elements'
import {getListNews} from '../api'

const ListNews = (props) => {
  return (
    <TouchableOpacity onPress={() => {
      props.onPress()
    }}>
      <Card image={{
        url: props.data.urlToImage
      }}>
        <Text
          style={{
          marginBottom: 10,
          fontSize: 16,
          fontWeight: 'bold'
        }}>
          {props.data.title}
        </Text>
        <Text style={{
          marginBottom: 10
        }}>
          {props.data.description}
        </Text>
        <View
          style={{
          flexDirection: 'row',
          width: '100%'
        }}>
          <Text style={StyleNewsItem.textBottom}>{props.data.author}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const StyleNewsItem = StyleSheet.create({
  textBottom: {
    color: 'grey',
    fontSize: 12
  }
})

export default class ListNewsScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({title: `${navigation.state.params.name}`});

  state = {
    source: [],
    loading: true
  }

  componentDidMount() {
    console.log(this.props)
    getListNews(this.props.navigation.state.params.id).then(result => {
      console.log('result: ', result)
      this.setState({source: result, loading: false})
    })
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
            keyExtractor={(item) => item.url}
            renderItem={({item}) => <ListNews
            data={item}
            onPress={() => {
            this
              .props
              .navigation
              .navigate('Detail', {
                url: item.url,
                title: item.title
              })
          }}/>}/>
}
      </View>
    );
  }
}