import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// import {zmanimsListReducer} from './reducers/zmanimReducers';
// import {hnzchotListReducer} from './reducers/hnzchotReducers';
// import {olimLatoraListReducer} from './reducers/olimLatoraReducers';
// import {generalMessagesListReducer} from './reducers/generalMessagesReducers';
// import {tfilotTimeListReducer} from './reducers/tfilotTimeReducers';
// import {shiorimListReducer} from './reducers/shiorimReducers';
import {dbListReducer} from './reducers/dbReducers';
import {
  chackConnectionReducer,
  chackIsServerAliveReducer,
} from './reducers/ChackConnectionReducers';

const reducer = combineReducers({
  // zmanimsList: zmanimsListReducer,
  // hnzchotList: hnzchotListReducer,
  // olimLatoraList: olimLatoraListReducer,
  // generalMessagesList: generalMessagesListReducer,
  // tfilotTimeList: tfilotTimeListReducer,
  // shiorimList: shiorimListReducer,
  dbList: dbListReducer,
  chackConnection: chackConnectionReducer,
  chackIsServerAlive: chackIsServerAliveReducer,
});
const middleware = [thunk];
const composeEnhancers = composeWithDevTools({realtime: true, port: 8081});
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
