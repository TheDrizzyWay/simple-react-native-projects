/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import fetchCoinData from '../actions/FetchCoinData';

const CryptoContainer = (props) => {
  const fetchCoins = props.fetchCoinData;
  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  return (
    <View>
      <Text>Container</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  crypto: state.crypto,
});

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
