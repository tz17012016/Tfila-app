import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ImageBackground, Image, Dimensions, View, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NetworkUtils} from '../utilities/NetworkUtills';
import {getDB} from '../redux/actions/dbActions';

import ZmanimScreen from '../screens/ZmanimScreen';
import HnzchotScreen from '../screens/HnzchotScreen';
import TfilotTimeScreen from '../screens/TfilotTimeScreen';
import GeneralMessagesScreen from '../screens/GeneralMessagesScreen';
import OlimLatoraScreen from '../screens/OlimLatoraScreen';
import PrashaScreen from '../screens/PrashaScreen';
import ShiorimScreen from '../screens/ShiorimScreen';
import OmerScreen from '../screens/OmerScreen';

import {isServerAlive} from '../utilities/baseUrl';

import SplashScreen from 'react-native-splash-screen';

const {width, height} = Dimensions.get('screen');
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [conectionObj, setConectionObj] = useState({});
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
      screenTimerData: [],
    },
  } = dbList;
  const {
    zmanimData,
    tfilaTimeData,
    olieLatoraData,
    shiorimDdata,
    hanzchData,
    generalMessageData,
    screenTimerData,
  } = db;
  const conection = async () => {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    return isConnected;
  };
  useEffect(() => {
    loadDb();
    SplashScreen.hide();
    let secTimer = setInterval(() => loadDb(), 1000 * 60 * 60 * 5);
    return () => clearInterval(secTimer);
  }, [dispatch]);

  const loadDb = async () => {
    setConectionObj(await conection());
    const loadDb = () => {
      return dispatch(getDB());
    };
    return loadDb();
  };

  let reaplaseScreanName = {
    Zmanim: 'Zmanim',
    Prasha: 'Prasha',
    TfilotTime: 'TfilotTime',
    OlimLatora: 'OlimLatora',
    Shiorim: 'Shiorim',
    Hnzchot: 'Hnzchot',
    GeneralMessages: 'GeneralMessages',
    OmerScreen: 'OmerScreen',
  };
  const ImageLoder = ({source, children}) => {
    const [didLoad, setLoad] = React.useState(false);

    const style = didLoad
      ? {position: 'absolute', width, height}
      : {opacity: 0};
    return (
      <ImageBackground
        style={style}
        key={didLoad}
        source={source}
        resizeMode="stretch"
        onLoad={() => setLoad(true)}>
        {children}
      </ImageBackground>
    );
  };
  let changeOptions = {
    Zmanim: dbSuccess && Object.keys(zmanimData)?.length >= 1 ? zmanimData : {},
    TfilotTime:
      dbSuccess && tfilaTimeData?.length >= 1 ? tfilaTimeData.reverse() : [],
    OlimLatora: dbSuccess && olieLatoraData?.length >= 1 ? olieLatoraData : [],
    Shiorim: dbSuccess && shiorimDdata?.length >= 1 ? shiorimDdata : [],
    Hnzchot: dbSuccess && hanzchData?.length >= 1 ? hanzchData : [],
    GeneralMessages:
      dbSuccess && generalMessageData?.length >= 1 ? generalMessageData : [],
    ScreenTimers:
      dbSuccess && screenTimerData?.length >= 1 ? screenTimerData : [],
  };
  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  const ChackEinternetConectionAgin = conectionObj => {
    React.useEffect(() => {
      let secTimer;
      if (
        (conectionObj &&
          conectionObj.isConnected === false &&
          conectionObj.isInternetReachable === false) ||
        (conectionObj &&
          conectionObj.isConnected === true &&
          conectionObj.isInternetReachable === false)
      ) {
        Loder();
        secTimer = setInterval(() => Loder(), 1000 * 60 * 5);
      } else {
        return conectionObj &&
          conectionObj.isConnected === true &&
          conectionObj.isInternetReachable === true ? (
          loadDb() && <Loding />
        ) : (
          <></>
        );
      }
      return () => clearInterval(secTimer);
    }, [conectionObj]);
    const Loder = async () => {
      setConectionObj(await conection());
    };
  };
  const ChackIsAlive = isServerAlive => {
    const [awake, setAwake] = React.useState(false);
    React.useEffect(() => {
      let secTimer;
      if (ErrorMessage && dbError === true && awake !== true) {
        Loder();
        secTimer = setInterval(() => Loder(), 1000 * 60 * 10);
      } else {
        return !awake ? loadDb() && <Loding /> : <></>;
      }
      return () => clearInterval(secTimer);
    }, [awake]);
    const Loder = async () => {
      setAwake(isServerAlive() || false);
    };
  };
  const Renders = () => {
    return (
      <>
        <ImageLoder
          source={require('../images/screans/defaultBackground.png')}
        />
        <NavigationContainer theme={Theme}>
          <Stack.Navigator
            screenOptions={{
              header: () => null,
            }}>
            <Stack.Screen name="Zmanim">
              {props => (
                <ImageLoder
                  source={require('../images/screans/zmanimBackground.png')}>
                  <ZmanimScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
              )}
            </Stack.Screen>
            <Stack.Screen name="Prasha">
              {props => (
                <ImageLoder
                  source={require('../images/screans/parshBackground.png')}>
                  <PrashaScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
              )}
            </Stack.Screen>
            <Stack.Screen name="TfilotTime">
              {props => (
                <ImageLoder
                  source={require('../images/screans/tiflotBackground.png')}>
                  <TfilotTimeScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
              )}
            </Stack.Screen>

            <Stack.Screen name="OmerScreen">
              {props => (
                <ImageLoder
                  source={require('../images/screans/omerBackground.png')}>
                  <OmerScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
              )}
            </Stack.Screen>

            <Stack.Screen name="OlimLatora">
              {props => (
                <ImageLoder
                  source={require('../images/screans/koraimBackground.png')}>
                  <OlimLatoraScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
              )}
            </Stack.Screen>
            <Stack.Screen name="Shiorim">
              {props => (
                <ImageLoder
                  source={require('../images/screans/shiorimBackground.png')}>
                  <ShiorimScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
              )}
            </Stack.Screen>
            <Stack.Screen name="Hnzchot">
              {props => (
                <ImageLoder
                  source={require('../images/screans/hantzchotBackground.png')}>
                  <HnzchotScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
              )}
            </Stack.Screen>
            <Stack.Screen name="GeneralMessages">
              {props => (
                <ImageLoder
                  source={require('../images/screans/messageBackground.png')}>
                  <GeneralMessagesScreen
                    {...props}
                    reaplaseScreanName={reaplaseScreanName}
                    changeOptions={changeOptions}
                  />
                </ImageLoder>
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
      <ImageLoder source={require('../images/screans/splashBackground.jpg')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              fontFamily: 'HadasimCLM-Bold',
              color: '#ff0000',
              marginBottom: 20,
            }}>
            תקלה זמנית בקבלת המידע מהשרת יש לרענן את האפליקצייה בעוד מספר דקות
          </Text>
          {}
          {ChackIsAlive(isServerAlive)}
          {ErrorMessage ? console.log(ErrorMessage) : <></>}
        </View>
      </ImageLoder>
    );
  };
  const NetworkError = () => {
    return (
      <ImageLoder source={require('../images/screans/splashBackground.jpg')}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              fontFamily: 'HadasimCLM-Bold',
              color: '#ff0000',
            }}>
            לא מחובר לאינטרנט! בדוק את החיבור ונסה שנית...
          </Text>

          {ChackEinternetConectionAgin(conectionObj)}
        </View>
      </ImageLoder>
    );
  };
  return (
    <>
      {conectionObj &&
      conectionObj.isInternetReachable === true &&
      conectionObj.isConnected === true ? (
        dbLoading === true && dbSuccess === false ? (
          <Loding />
        ) : dbError === false && dbSuccess === true ? (
          <Renders />
        ) : (
          ((<Error />), console.log(dbError))
        )
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default AppNavigator;
