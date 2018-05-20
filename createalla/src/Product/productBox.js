import React, { Component } from 'react';
import {FlatList, View, Text} from 'react-native';

import Loading from './components/loading';
import ProductItem from './components/productItem';
import SortModal from './components/sortModal';
import SortHeader from './components/sortHeader';

class ProductBox extends Component {
  render()  {
    return (
      <View style={{flex:1, backgroundColor:"#e9e9e9"}}>
        <View style={{flex:1,margin:20}}>
          <SortHeader toggleModal={this.props.toggleModal} sortBy={this.props.sortBy}/>
          <SortModal {...this.props} />
          {this.renderProducts()}
          {this.props.fetchMore ?
            <Loading />:null
          }
        </View>
      </View>
    )
  }

  renderProducts()  {
    if(this.props.isLoading)
      return <Loading />

    return (
      <FlatList
      data={this.props.products}
      showsVerticalScrollIndicator={false}
      keyExtractor={this.keyExtractor}
      onEndReached={
        this.props.fetchProducts.bind(
          this,
          this.props.currentLimit+15,
          this.props.sortBy,
          "fetchMore"
        )
      }
      renderItem={({item, index}) =>
        <ProductItem
          product={item}
          index={index}
        />
      }
    />
    )
  }


  keyExtractor = (item,index) => item.id;
}

export default ProductBox;
