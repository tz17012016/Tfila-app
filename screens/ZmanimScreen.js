import React, {useEffect} from 'react';
import ZmnimList from '../components/ZmnimList';
const ZmanimScreen = ({navigation}) => {
  useEffect(() => {
    let secTimer = setInterval(() => {
      navigation.replace('WelcomeTime');
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <ZmnimList />;
};

export default ZmanimScreen;
