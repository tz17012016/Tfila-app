import React, {useEffect} from 'react';
import WelcomeTime from '../components/WelcomeTime';
const WelcomeTimeScreen = ({navigation}) => {
  useEffect(() => {
    let secTimer = setInterval(() => {
      navigation.replace('TfilotTime');
    }, 2 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <WelcomeTime />;
};

export default WelcomeTimeScreen;
