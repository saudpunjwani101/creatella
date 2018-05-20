import React from 'react';
import { Image } from 'react-native';

const AdImage = (props) =>
  props.index!=0 && props.index % 20 == 0 ?
    <Image
      style={{flex:1, height:100}}
      source={{uri: `http://localhost:3000/ads/?r=${Math.floor(Math.random()*1000)}`}}/>
    :
    null

export default AdImage;
