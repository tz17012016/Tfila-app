import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDB} from '../actions/dbActions';
import {getHalchYomitDb} from '../actions/halchYomitActions';
import {getConnection} from '../actions/ChackConnectionActions';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from '../../routes/AppNavigator';

const DB = () => {
  const dispatch = useDispatch();
  const dbList = useSelector(state => ({...state.dbList}));

  const chackConnection = useSelector(state => ({...state.chackConnection}));
  const halchYomit = useSelector(state => ({...state.halchYomit}));
  const {
    loading: halachLoading = true,
    success: halachSuccess = false,
    halachError = false,
    halchYomitData = [],
    error: halachErrorMassege = '',
  } = halchYomit;
  const {
    loading: connectionLoading = true,
    success: connectionSuccess = false,
    connection = {},
  } = chackConnection;
  const {
    isInternetReachable = false,
    type = '',
    isConnected = false,
    isWifiEnabled = false,
    details = {},
  } = connection;
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
  React.useEffect(() => {
    loadDbFromRedux();
    SplashScreen.hide();
    let secTimer = setInterval(() => loadDbFromRedux(), 1000 * 60 * 60 * 5);
    return () => clearInterval(secTimer);
  }, [dispatch, loadDbFromRedux]);
  const loadDbFromRedux = React.useCallback(() => {
    const loadDb = async () => {
      return (
        dispatch(getConnection()),
        dispatch(getDB()),
        dispatch(getHalchYomitDb())
      );
    };
    return loadDb();
  }, [dispatch]);
  let reaplaseScreanName = {
    Zmanim: 'Zmanim',
    Prasha: 'Prasha',
    TfilotTime: 'TfilotTime',
    OlimLatora: 'OlimLatora',
    Shiorim: 'Shiorim',
    Hnzchot: 'Hnzchot',
    GeneralMessages: 'GeneralMessages',
    OmerScreen: 'OmerScreen',
    HalachYomit: 'HalachYomit',
    HagimScreen: 'HagimScreen',
    ShabatScreen: 'ShabatScreen',
    FastScreen: 'FastScreen',
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
    HalachYomit:
      halachSuccess && halchYomitData?.length >= 1 ? halchYomitData : [],
  };
  return (
    <AppNavigator
      changeOptions={changeOptions}
      reaplaseScreanName={reaplaseScreanName}
      ErrorMessage={ErrorMessage}
      dbError={dbError}
      dbLoading={dbLoading}
      dbSuccess={dbSuccess}
      isConnected={isConnected}
      isInternetReachable={isInternetReachable}
      isWifiEnabled={isWifiEnabled}
      type={type}
      details={details}
      loadDbFromRedux={loadDbFromRedux}
      connectionSuccess={connectionSuccess}
      connectionLoading={connectionLoading}
    />
  );
};

export default DB;
