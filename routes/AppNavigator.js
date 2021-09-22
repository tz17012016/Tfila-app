import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGeneralMessages} from '../redux/actions/generalMessagesActions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {Image, Dimensions} from 'react-native';
import {getHnzchot} from '../redux/actions/hnzchotActions';
import {getOlimLatora} from '../redux/actions/olimLatoraActions';
import {getTfilotTime} from '../redux/actions/tfilotTimeActions';
import {getZmanim} from '../redux/actions/zmanimActions';

import ZmanimScreen from '../screens/ZmanimScreen';
import HnzchotScreen from '../screens/HnzchotScreen';
import TfilotTimeScreen from '../screens/TfilotTimeScreen';
import GeneralMessagesScreen from '../screens/GeneralMessagesScreen';
import OlimLatoraScreen from '../screens/OlimLatoraScreen';
import WelcomeTimeScreen from '../screens/WelcomeTimeScreen';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('screen');

const AppNavigator = () => {
  const dispatch = useDispatch();
  const generalMessagesList = useSelector(state => ({
    ...state.generalMessagesList,
  }));
  const hnzchotList = useSelector(state => ({...state.hnzchotList}));
  const olimLatoraList = useSelector(state => ({
    ...state.olimLatoraList,
  }));
  const tfilotTimeList = useSelector(state => ({...state.tfilotTimeList}));
  const zmanimsList = useSelector(state => ({...state.zmanimsList}));

  useEffect(() => {
    loadGeneralMessages();
    loadHnzchots();
    loadOlimLatora();
    loadTfilotTime();
    loadZmanims();
    // let secTimer = setInterval(
    //   () => loadGeneralMessages(),
    //   loadHnzchots(),
    //   loadOlimLatora(),
    //   loadTfilotTime(),
    //   loadZmanims(),
    //   1000 * 60 * 60 * 24,
    // );
    // return () => clearInterval(secTimer);
  }, [dispatch]);

  const loadGeneralMessages = () => {
    return dispatch(getGeneralMessages());
  };
  const loadHnzchots = () => {
    return dispatch(getHnzchot());
  };
  const loadOlimLatora = () => {
    return dispatch(getOlimLatora());
  };
  const loadTfilotTime = () => {
    return dispatch(getTfilotTime());
  };
  const loadZmanims = () => {
    return dispatch(getZmanim());
  };
  return (
    <NavigationContainer>
      <Image
        source={require('../images/Bgk.png')}
        style={{
          width,
          height,
          position: 'absolute',
        }}
      />
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Stack.Screen name="Zmanim">
          {props => <ZmanimScreen {...props} zmanimsList={zmanimsList} />}
        </Stack.Screen>
        <Stack.Screen name="WelcomeTime">
          {props => <WelcomeTimeScreen {...props} zmanimsList={zmanimsList} />}
        </Stack.Screen>
        <Stack.Screen name="TfilotTime">
          {props => (
            <TfilotTimeScreen {...props} tfilotTimeList={tfilotTimeList} />
          )}
        </Stack.Screen>
        <Stack.Screen name="OlimLatora">
          {props => (
            <OlimLatoraScreen {...props} olimLatoraList={olimLatoraList} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Hnzchot">
          {props => <HnzchotScreen {...props} hnzchotList={hnzchotList} />}
        </Stack.Screen>
        <Stack.Screen name="GeneralMessages">
          {props => (
            <GeneralMessagesScreen
              {...props}
              generalMessagesList={generalMessagesList}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
