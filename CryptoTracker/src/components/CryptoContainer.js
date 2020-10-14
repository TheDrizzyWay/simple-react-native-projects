/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import fetchCoinData from '../actions/FetchCoinData';
import CoinCard from './CoinCard';

const CryptoContainer = (props) => {
  const fetchCoins = props.fetchCoinData;
  const { crypto } = props;

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  const renderCoinCards = () => {
    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={'Loading...'}
            textStyle={{color: '#253145'}}
            animation="fade"
          />
        </View>
      );
    }

    if (crypto.data.data) {
      return crypto.data.data.map((coin, index) => (
        <CoinCard
          key={index}
          coin_name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          percent_change_24h={coin.percent_change_24h}
          percent_change_7d={coin.percent_change_7d}
        />
      ));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {renderCoinCards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  },
});

const mapStateToProps = (state) => ({
  crypto: state.crypto,
});

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer);
