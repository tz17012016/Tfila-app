import React, {useEffect} from 'react';
import OlimLatoraList from '../components/OlimLatoraList';
const OlimLatoraScreen = ({navigation}) => {
  useEffect(() => {
    let secTimer = setInterval(() => {
      navigation.replace('Hnzchot');
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <OlimLatoraList />;
};

export default OlimLatoraScreen;
