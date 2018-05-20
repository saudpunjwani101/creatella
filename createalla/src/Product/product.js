import React, { Component } from 'react';
import {View, Text} from 'react-native';

import ProductBox from './productBox';
import Loading from './components/loading';

import {  getProducts } from './Api/getProducts';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      sortBy: "id",
      currentLimit: 15,
      isModalVisible: false,
      isLoading:null,
      fetchMore:null
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }
  componentWillMount() {
      this.fetchProducts(this.state.currentLimit, "id", "isLoading");
  }

  async fetchProducts(limit, sortBy, load) {
    await this.setState({[load]: true});
    const products = await getProducts(limit, sortBy)
    await this.setState({
      products,
      sortBy,
      currentLimit: limit+this.state.currentLimit,
      [load]:false
    });
  }

  toggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <ProductBox
      currentLimit={this.state.currentLimit}
      products={this.state.products}
      sortBy={this.state.sortBy}
      isModalVisible={this.state.isModalVisible}
      isLoading={this.state.isLoading}
      fetchMore={this.state.fetchMore}
      fetchProducts={this.fetchProducts}
      toggleModal={this.toggleModal}
      />
    );
  }
}
