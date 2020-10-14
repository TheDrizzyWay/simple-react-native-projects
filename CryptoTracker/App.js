/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header } from './src/components';

const App = () => {
  return (
    <Provider store={Store}>
      <View>
        <Header />
      </View>
    </Provider>
  );
};

export default App;
