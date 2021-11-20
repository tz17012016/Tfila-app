import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import DB from './redux/DB/DB';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <DB />
    </Provider>
  );
};

export default App;
