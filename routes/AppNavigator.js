import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGeneralMessages} from '../redux/actions/generalMessagesActions';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {Image, Dimensions, View, Text} from 'react-native';
import {getHnzchot} from '../redux/actions/hnzchotActions';
import {getOlimLatora} from '../redux/actions/olimLatoraActions';
import {getTfilotTime} from '../redux/actions/tfilotTimeActions';
import {getZmanim} from '../redux/actions/zmanimActions';
import {getShiorim} from '../redux/actions/shiorimActions';

import ZmanimScreen from '../screens/ZmanimScreen';
import HnzchotScreen from '../screens/HnzchotScreen';
import TfilotTimeScreen from '../screens/TfilotTimeScreen';
import GeneralMessagesScreen from '../screens/GeneralMessagesScreen';
import OlimLatoraScreen from '../screens/OlimLatoraScreen';
import WelcomeTimeScreen from '../screens/WelcomeTimeScreen';
import ShiorimScreen from '../screens/ShiorimScreen';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('screen');
// export const navigationRef = React.createRef();
// export const navigationRef = createNavigationContainerRef();
// export function navigate(name, params) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }
const AppNavigator = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const shiorimList = useSelector(state => ({
    ...state.shiorimList,
  }));
  const {
    loading: shiorimLoading,
    success: shiorimSuccess,
    shiorim,
  } = shiorimList;
  const generalMessagesList = useSelector(state => ({
    ...state.generalMessagesList,
  }));

  const refCounter = useRef(counter);
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
    const loadShiorim = () => {
      return dispatch(getShiorim());
    };
    return (
      loadGeneralMessages(),
      loadHnzchots(),
      loadOlimLatora(),
      loadTfilotTime(),
      loadZmanims(),
      loadShiorim()
    );
  };

  // const startTimeout = () => {
  //   setInterval(() => {
  //     const arrLengh = screenNamesArry.length;
  //     const nextScreen = screenNamesArry[(counter + 1) % arrLengh];
  //     setCounter(refCounter.current + 1);
  //     navigate(nextScreen);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimeout();
  // }, []);

  // const checkNamesArray = changeOptions => {
  //   const {
  //     Zmanim,
  //     WelcomeTime,
  //     TfilotTime,
  //     OlimLatora,
  //     Hnzchot,
  //     GeneralMessages,
  //   } = changeOptions;
  //   let screenNames = [];
  // };

  let reaplaseScreanName = {
    Zmanim: 'Zmanim',
    WelcomeTime: 'WelcomeTime',
    TfilotTime: 'TfilotTime',
    OlimLatora: 'OlimLatora',
    Shiorim: 'Shiorim',
    Hnzchot: 'Hnzchot',
    GeneralMessages: 'GeneralMessages',
  };
  // const screenNamesArry = [
  //   'zmanimm',
  //   'WelcomeTime',
  //   'TfilotTime',
  //   'OlimLatora',
  //   'Hnzchot',
  //   'GeneralMessages',
  // ];
  // let screenDetails = new Map([
  //   ['Zmanim', zmanim],
  //   ['WelcomeTime', zmanim],
  //   ['TfilotTime', tfilotTimes],
  //   ['OlimLatora', olimLatoras],
  //   ['Hnzchot', hnzchots],
  //   ['GeneralMessages', generalMessages],
  // ]);

  let changeOptions = {
    Zmanim: zmanimsSuccess ? zmanim : {},
    TfilotTime: tfilotTimeSuccess ? tfilotTimes : [],
    OlimLatora: olimLatoraSuccess ? olimLatoras : [],
    Shiorim: shiorimSuccess ? shiorim : [],
    Hnzchot: hnzchotSuccess ? hnzchots : [],
    GeneralMessages: messagesSuccess ? generalMessages : [],
  };
  const Renders = () => {
    return (
      <>
        <NavigationContainer>
          <Image
            source={require('../images/bgM.png')}
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
              {props => (
                <ZmanimScreen
                  {...props}
                  zmanimsList={zmanimsList}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                />
              )}
            </Stack.Screen>
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
            <Stack.Screen name="TfilotTime">
              {props => (
                <TfilotTimeScreen
                  {...props}
                  tfilotTimeList={tfilotTimeList}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                  zmanimsList={zmanimsList}
                />
              )}
            </Stack.Screen>

            <Stack.Screen name="OlimLatora">
              {props => (
                <OlimLatoraScreen
                  {...props}
                  olimLatoraList={olimLatoraList}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                  zmanimsList={zmanimsList}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Shiorim">
              {props => (
                <ShiorimScreen
                  {...props}
                  shiorimList={shiorimList}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                  zmanimsList={zmanimsList}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Hnzchot">
              {props => (
                <HnzchotScreen
                  {...props}
                  hnzchotList={hnzchotList}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                  zmanimsList={zmanimsList}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="GeneralMessages">
              {props => (
                <GeneralMessagesScreen
                  {...props}
                  generalMessagesList={generalMessagesList}
                  reaplaseScreanName={reaplaseScreanName}
                  changeOptions={changeOptions}
                  zmanimsList={zmanimsList}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  };
  const Loding = () => {
    return (
      <View>
        <Text>loding</Text>
      </View>
    );
  };
  return (
    <>
      {zmanimsLoading &&
      tfilotTimeLoading &&
      olimLatoraLoading &&
      messagesLoading &&
      shiorimLoading &&
      hnzchotLoading &&
      olimLatoraLoading ? (
        <Loding />
      ) : (
        <Renders />
      )}
    </>
  );
};

export default AppNavigator;
