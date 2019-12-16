import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomePage from './screens/HomePage';
import FavMovies from './screens/FavMovies';



export default class Router extends Component{
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = new StackNavigator({
    HomePage:{ screen: HomePage},
    FavMovies:{ screen: FavMovies},
},{
    navigationOptions:{
        gesturesEnabled: false,
        header: null
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
