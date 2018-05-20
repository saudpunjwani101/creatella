import React from 'react';
import { View, Text } from 'react-native';

const FacePrice = (props) =>
  <View>
    <Text style={{fontSize:props.product.size}}>
      {props.product.face}
    </Text>
    <Text style={{marginTop:10, fontWeight:'300', fontSize:12}}>
      {props.product.price.toLocaleString('USD', { style: 'currency', currency: 'USD'})}
    </Text>
  </View>

export default FacePrice;
