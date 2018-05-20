import React from 'react';
import {  View, Text} from 'react-native';

import Date from './date';
import AdImage from './adImage'
import FacePrice from './facePrice';

const ProductItem = (props) =>
  <View style={{flex:1,margin:5, backgroundColor:"white", padding:8, borderRadius:8}}>
    <FacePrice product={props.product} />
    <Date date={props.product.date} />
    <AdImage index={props.index} />
  </View>

export default ProductItem;
