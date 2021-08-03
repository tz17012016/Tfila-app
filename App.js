import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './routes/AppNavigator';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
