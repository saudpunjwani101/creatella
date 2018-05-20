import React from 'react';
import {  View, Text, TouchableOpacity  } from 'react-native';


const SortHeader = (props) =>
  <View style={{margin:5, flexDirection:"row", justifyContent:"center"}}>
    <TouchableOpacity onPress={props.toggleModal}>
      <Text style={{fontSize:15}}> Sort : {props.sortBy}</Text>
    </TouchableOpacity>
  </View>

export default SortHeader;
