import React, {useEffect} from 'react';
import OlimLatoraList from '../components/OlimLatoraList';
import {useFocusEffect} from '@react-navigation/native';
// const OlimLatoraScreen = ({navigation, olimLatoraList}) => {
//   useEffect(() => {
//     let secTimer = setInterval(() => {
//       navigation.replace('Hnzchot');
//     }, 1 * 60 * 1000);
//     return () => clearInterval(secTimer);
//   }, []);
//   return <OlimLatoraList olimLatoraList={olimLatoraList} />;
// };
const OlimLatoraScreen = ({navigation, olimLatoraList}) => {
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        navigation.replace('Hnzchot');
      }, 1 * 60 * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation]),
  );
  return <OlimLatoraList olimLatoraList={olimLatoraList} />;
};

export default OlimLatoraScreen;
