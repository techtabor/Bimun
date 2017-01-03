import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps'

export default class Bimun extends Component {
  render() {
    return (
        <MapView initialRegion={{
          latitude: 37.78825,
          longitude: 44.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        />
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  map: {
    width:300,
    height:200,
  },
})


AppRegistry.registerComponent('Bimun', () => Bimun);
