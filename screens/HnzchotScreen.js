import React, {useEffect} from 'react';
import HnzchotList from '../components/HnzchotList';
const HnzchotScreen = ({navigation}) => {
  useEffect(() => {
    let secTimer = setInterval(() => {
      navigation.replace('GeneralMessages');
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <HnzchotList />;
};

export default HnzchotScreen;
