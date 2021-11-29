import React from 'react';
import {
  getConnection,
  getIsServerAlive,
} from '../redux/actions/ChackConnectionActions';
import {useDispatch, useSelector} from 'react-redux';
import {getDB} from '../redux/actions/dbActions';
import SplashScreen from 'react-native-splash-screen';
import ServerError from './ServerError';
import {getHalchYomitDb} from '../redux/actions/halchYomitActions';
const ChackIsAlive = () => {
  const dispatch = useDispatch();
  const chackIsServerAlive = useSelector(state => ({
    ...state.chackIsServerAlive,
  })) || {isServerAlive: false, loading: true, success: false, error: false};
  const {
    isServerAlive = false,
    loading = true,
    success = false,
    error = undefined,
  } = chackIsServerAlive;
  React.useEffect(() => {
    let secTimer;
    loadDbFromRedux1();
    SplashScreen.hide();
    if (isServerAlive === true) {
      loadDbFromRedux2();
    } else {
      secTimer = setInterval(() => {
        loadDbFromRedux2();
        if (isServerAlive === true) {
          loadDbFromRedux1();
        } else {
          <ServerError />;
        }
      }, 1000 * 30);
    }
    return () => clearInterval(secTimer);
  }, [dispatch, isServerAlive, loadDbFromRedux1, loadDbFromRedux2]);

  const loadDbFromRedux1 = React.useCallback(() => {
    const loadDb = async () => {
      return dispatch(getIsServerAlive());
    };
    return loadDb();
  }, [dispatch]);

  const loadDbFromRedux2 = React.useCallback(() => {
    const loadDb = async () => {
      return (
        dispatch(getConnection()),
        dispatch(getDB()),
        dispatch(getHalchYomitDb())
      );
    };
    return loadDb();
  }, [dispatch]);
};

export default ChackIsAlive;
