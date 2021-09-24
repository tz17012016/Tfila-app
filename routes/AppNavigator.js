import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGeneralMessages} from '../redux/actions/generalMessagesActions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {Image, Dimensions, View, Text} from 'react-native';
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
  const {
    loading: messagesLoading,
    success: messagesSuccess,
    generalMessages,
  } = generalMessagesList;
  const hnzchotList = useSelector(state => ({...state.hnzchotList}));
  const {
    loading: hnzchotLoading,
    success: hnzchotSuccess,
    hnzchots,
  } = hnzchotList;
  const olimLatoraList = useSelector(state => ({
    ...state.olimLatoraList,
  }));
  const {
    loading: olimLatoraLoading,
    success: olimLatoraSuccess,
    olimLatoras,
  } = olimLatoraList;
  const tfilotTimeList = useSelector(state => ({...state.tfilotTimeList}));
  const {
    loading: tfilotTimeLoading,
    success: tfilotTimeSuccess,
    tfilotTimes,
  } = tfilotTimeList;
  const zmanimsList = useSelector(state => ({...state.zmanimsList}));
  const {
    loading: zmanimsLoading,
    success: zmanimsSuccess,
    zmanim,
  } = zmanimsList;
  console.log(hnzchotList);
  useEffect(() => {
    loadDb();

    let secTimer = setInterval(() => loadDb(), 1000 * 60 * 60 * 24);
    return () => clearInterval(secTimer);
  }, [dispatch]);
  const loadDb = () => {
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
      loadGeneralMessages(),
      loadHnzchots(),
      loadOlimLatora(),
      loadTfilotTime(),
      loadZmanims()
    );
  };
  let reaplaseScreanName = {
    Zmanim: 'Zmanim',
    WelcomeTime: 'WelcomeTime',
    TfilotTime: 'TfilotTime',
    OlimLatora: 'OlimLatora',
    Hnzchot: 'Hnzchot',
    GeneralMessages: 'GeneralMessages',
  };
  let changeOptions = {
    Zmanim: zmanim,
    TfilotTime: tfilotTimes,
    OlimLatora: olimLatoras,
    Hnzchot: hnzchots,
    GeneralMessages: generalMessages,
  };
  console.log(changeOptions);
  const Loding = () => {
    return (
      <View>
        <Text>loding</Text>
      </View>
    );
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
        {zmanimsLoading &&
        tfilotTimeLoading &&
        olimLatoraLoading &&
        messagesLoading &&
        hnzchotLoading ? (
          <Stack.Screen name="loding" component={Loding} />
        ) : zmanimsSuccess == true ? (
          <Stack.Screen name="Zmanim">
            {props => (
              <ZmanimScreen
                {...props}
                zmanimsList={zmanimsList}
                reaplaseScreanName={reaplaseScreanName}
                changeOptions={changeOptions}
              />
            )}
          </Stack.Screen>
        ) : zmanimsSuccess === true ? (
          <Stack.Screen name="WelcomeTime">
            {props => (
              <WelcomeTimeScreen
                {...props}
                zmanimsList={zmanimsList}
                reaplaseScreanName={reaplaseScreanName}
                changeOptions={changeOptions}
              />
            )}
          </Stack.Screen>
        ) : tfilotTimeSuccess === true ? (
          <Stack.Screen name="TfilotTime">
            {props => (
              <TfilotTimeScreen
                {...props}
                tfilotTimeList={tfilotTimeList}
                reaplaseScreanName={reaplaseScreanName}
                changeOptions={changeOptions}
              />
            )}
          </Stack.Screen>
        ) : olimLatoraSuccess === true ? (
          <Stack.Screen name="OlimLatora">
            {props => (
              <OlimLatoraScreen
                {...props}
                olimLatoraList={olimLatoraList}
                reaplaseScreanName={reaplaseScreanName}
                changeOptions={changeOptions}
              />
            )}
          </Stack.Screen>
        ) : hnzchotSuccess === true ? (
          <Stack.Screen name="Hnzchot">
            {props => (
              <HnzchotScreen
                {...props}
                hnzchotList={hnzchotList}
                reaplaseScreanName={reaplaseScreanName}
                changeOptions={changeOptions}
              />
            )}
          </Stack.Screen>
        ) : messagesSuccess === true ? (
          <Stack.Screen name="GeneralMessages">
            {props => (
              <GeneralMessagesScreen
                {...props}
                generalMessagesList={generalMessagesList}
                reaplaseScreanName={reaplaseScreanName}
                changeOptions={changeOptions}
              />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="loding" component={Loding} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
