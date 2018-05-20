import React from 'react';
import {  View, ActivityIndicator  } from 'react-native';

const Loading = (props) =>
  <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
    <ActivityIndicator size="large" color="green" />
  </View>

export default Loading;
