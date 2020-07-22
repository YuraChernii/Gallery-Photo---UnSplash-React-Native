import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Image } from 'react-native';
import React from 'react';

export default class ImageElement extends React.Component {
render() {
  return (
<Image source={this.props.imgsource} style={styles.image}></Image>
  );
  }
}

const styles = StyleSheet.create({
image: {
flex:1,
width:null,
alignSelf:'stretch',
}
});
