import React, {useEffect} from 'react';
import WelcomeTime from '../components/WelcomeTime';
import {useFocusEffect} from '@react-navigation/native';
// const WelcomeTimeScreen = ({navigation, zmanimsList}) => {
//   useEffect(() => {
//     let secTimer = setInterval(() => {
//       navigation.replace('TfilotTime');
//     }, 1 * 60 * 1000);
//     return () => clearInterval(secTimer);
//   }, []);
//   return <WelcomeTime zmanimsList={zmanimsList} />;
// };
const WelcomeTimeScreen = ({navigation, zmanimsList}) => {
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        navigation.replace('TfilotTime');
      }, 1 * 60 * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation]),
  );
  return <WelcomeTime zmanimsList={zmanimsList} />;
};

export default WelcomeTimeScreen;
