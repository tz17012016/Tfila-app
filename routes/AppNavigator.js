import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ImageBackground, Image, Dimensions, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {getDB} from '../redux/actions/dbActions';

import ZmanimScreen from '../screens/ZmanimScreen';
import HnzchotScreen from '../screens/HnzchotScreen';
import TfilotTimeScreen from '../screens/TfilotTimeScreen';
import GeneralMessagesScreen from '../screens/GeneralMessagesScreen';
import OlimLatoraScreen from '../screens/OlimLatoraScreen';
import WelcomeTimeScreen from '../screens/WelcomeTimeScreen';
import ShiorimScreen from '../screens/ShiorimScreen';

import SplashScreen from 'react-native-splash-screen';

const {width, height} = Dimensions.get('screen');
const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();

  const dbList = useSelector(state => ({...state.dbList}));
  const {
    loading: dbLoading = true,
    success: dbSuccess = false,
    dbError = false,
    error: ErrorMessage = {},
    db = {
      zmanimData: {},
      tfilaTimeData: [],
      olieLatoraData: [],
      shiorimDdata: [],
      hanzchData: [],
      generalMessageData: [],
    },
  } = dbList;
  const {
    zmanimData,
    tfilaTimeData,
    olieLatoraData,
    shiorimDdata,
    hanzchData,
    generalMessageData,
  } = db;
  useEffect(() => {
    loadDb();
    SplashScreen.hide();
    let secTimer = setInterval(() => loadDb(), 1000 * 60 * 60 * 5);
    return () => clearInterval(secTimer);
  }, [dispatch]);
  const loadDb = () => {
    const loadDb1 = () => {
      return dispatch(getDB());
    };
    return loadDb1();
  };

  let reaplaseScreanName = {
    Zmanim: 'Zmanim',
    WelcomeTime: 'WelcomeTime',
    TfilotTime: 'TfilotTime',
    OlimLatora: 'OlimLatora',
    Shiorim: 'Shiorim',
    Hnzchot: 'Hnzchot',
    GeneralMessages: 'GeneralMessages',
  };

  let changeOptions1 = {
    Zmanim: dbSuccess && Object.keys(zmanimData).length >= 1 ? zmanimData : {},
    TfilotTime: dbSuccess && tfilaTimeData.length >= 1 ? tfilaTimeData : [],
    OlimLatora: dbSuccess && olieLatoraData.length >= 1 ? olieLatoraData : [],
    Shiorim: dbSuccess && shiorimDdata.length >= 1 ? shiorimDdata : [],
    Hnzchot: dbSuccess && hanzchData.length >= 1 ? hanzchData : [],
    GeneralMessages:
      dbSuccess && generalMessageData.length >= 1 ? generalMessageData : [],
  };
  const Renders = () => {
    return (
      <>
        <NavigationContainer>
          <Image
            source={require('../images/screans/defaultBackground.png')}
            resizeMode="contain"
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
                <ImageBackground
                  source={require('../images/screans/zmanimBackground.png')}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    width,
                    height,
                  }}>
                  <ZmanimScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions1={changeOptions1}
                  />
                </ImageBackground>
              )}
            </Stack.Screen>
            <Stack.Screen name="WelcomeTime">
              {props => (
                <ImageBackground
                  source={require('../images/screans/parshBackground.png')}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    width,
                    height,
                  }}>
                  <WelcomeTimeScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions1={changeOptions1}
                  />
                </ImageBackground>
              )}
            </Stack.Screen>
            <Stack.Screen name="TfilotTime">
              {props => (
                <ImageBackground
                  source={require('../images/screans/tiflotBackground.png')}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    width,
                    height,
                  }}>
                  <TfilotTimeScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions1={changeOptions1}
                  />
                </ImageBackground>
              )}
            </Stack.Screen>

            <Stack.Screen name="OlimLatora">
              {props => (
                <ImageBackground
                  source={require('../images/screans/koraimBackground.png')}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    width,
                    height,
                  }}>
                  <OlimLatoraScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions1={changeOptions1}
                  />
                </ImageBackground>
              )}
            </Stack.Screen>
            <Stack.Screen name="Shiorim">
              {props => (
                <ImageBackground
                  source={require('../images/screans/shiorimBackground.png')}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    width,
                    height,
                  }}>
                  <ShiorimScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions1={changeOptions1}
                  />
                </ImageBackground>
              )}
            </Stack.Screen>
            <Stack.Screen name="Hnzchot">
              {props => (
                <ImageBackground
                  source={require('../images/screans/hantzchotBackground.png')}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    width,
                    height,
                  }}>
                  <HnzchotScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions1={changeOptions1}
                  />
                </ImageBackground>
              )}
            </Stack.Screen>
            <Stack.Screen name="GeneralMessages">
              {props => (
                <ImageBackground
                  source={require('../images/screans/messageBackground.png')}
                  resizeMode="contain"
                  style={{
                    position: 'absolute',
                    width,
                    height,
                  }}>
                  <GeneralMessagesScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions1={changeOptions1}
                  />
                </ImageBackground>
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
        <Image
          source={require('../images/screans/splashBackground.jpg')}
          resizeMode="cover"
          style={{
            width,
            height,
            position: 'absolute',
          }}
        />
      </View>
    );
  };
  const Error = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={require('../images/screans/splashBackground.jpg')}
          resizeMode="cover"
          style={{
            width,
            height,
            position: 'absolute',
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              fontFamily: 'HadasimCLM-Bold',
              color: '#ff0000',
              marginBottom: '20@s',
            }}>
            לא מחובר לאינטרנט! אנא התחבר לאינטרנט
          </Text>
          {ErrorMessage ? (
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                fontFamily: 'HadasimCLM-Bold',
                color: '#0000',
                marginBottom: '20@s',
              }}>
              {ErrorMessage}
            </Text>
          ) : (
            <></>
          )}
        </ImageBackground>
      </View>
    );
  };
  return (
    <>
      {dbLoading === true && dbSuccess === false ? (
        <Loding />
      ) : dbError === false && dbSuccess === true ? (
        <Renders />
      ) : (
        <Error />
      )}
    </>
  );
};

export default AppNavigator;
