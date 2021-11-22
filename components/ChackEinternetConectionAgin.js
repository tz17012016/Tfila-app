import React from 'react';
import {getConnection} from '../redux/actions/ChackConnectionActions';
import {useDispatch} from 'react-redux';
import {getDB} from '../redux/actions/dbActions';
import SplashScreen from 'react-native-splash-screen';
import {getHalchYomitDb} from '../redux/actions/halchYomitActions';
const ChackEinternetConectionAgin = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    loadDbFromRedux();
    SplashScreen.hide();
    let secTimer = setInterval(() => loadDbFromRedux(), 1000 * 30);
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
};
export default ChackEinternetConectionAgin;
