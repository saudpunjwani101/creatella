import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

const styles = {
  modal: {
    backgroundColor:"white", padding:10, alignItems:"center", borderRadius:10
  }
}

const SortModal = (props) =>
  <Modal isVisible={props.isModalVisible}>
    <View style={{flex: 1, justifyContent:"center"}}>
      <View style={styles.modal}>
        {SortBy(props, "id")}
        {SortBy(props, "price")}
        {SortBy(props, "size")}
      </View>
    </View>
  </Modal>

  function SortBy(props, sortOption) {
    return (
      <Text onPress={() => {
        props.fetchProducts(props.currentLimit, sortOption, "isLoading");
        props.toggleModal();
      }}
        style={{fontSize:16, margin:5}}>
        {sortOption}
      </Text>
    )
  }

export default SortModal;
