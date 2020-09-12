/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import MyStackNavigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

declare const global: {HermesInternal: null | {}};

const store = configureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MyStackNavigation />
      </Provider>
    </>
  );
};
export default App;
