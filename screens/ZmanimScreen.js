import React, {useEffect} from 'react';
import ZmnimList from '../components/ZmnimList';
import {useFocusEffect} from '@react-navigation/native';
// const ZmanimScreen = ({navigation, zmanimsList}) => {
//   useEffect(() => {
//     let secTimer = setInterval(() => {
//       navigation.replace('WelcomeTime');
//     }, 1 * 60 * 1000);
//     return () => clearInterval(secTimer);
//   }, []);
//   return <ZmnimList zmanimsList={zmanimsList} />;
// };
const ZmanimScreen = ({navigation, zmanimsList}) => {
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        navigation.replace('WelcomeTime');
      }, 1 * 60 * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation]),
  );
  return <ZmnimList zmanimsList={zmanimsList} />;
};

export default ZmanimScreen;
