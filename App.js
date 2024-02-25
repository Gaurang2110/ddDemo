import {LogBox, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {Provider} from 'react-redux';

import HomeScreen from './src/containers/HomeScreen';
import {PersistGate} from 'redux-persist/integration/react';
import Loader from './src/components/loader';
import {persistor, store} from './src/redux/store';

const App = () => {
  // Define your custom error handler
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={<Loader visible={true} />} persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
