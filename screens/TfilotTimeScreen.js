import React, {useEffect} from 'react';
import TfilotTimeList from '../components/TfilotTimeList';
const TfilotTimeScreen = ({navigation}) => {
  useEffect(() => {
    let secTimer = setInterval(() => {
      navigation.replace('OlimLatora');
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <TfilotTimeList />;
};

export default TfilotTimeScreen;
