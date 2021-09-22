import React, {useEffect} from 'react';
import TfilotTimeList from '../components/TfilotTimeList';
import {useFocusEffect} from '@react-navigation/native';
// const TfilotTimeScreen = ({navigation, olimLatoraList}) => {
//   useEffect(() => {
//     let secTimer = setInterval(() => {
//       navigation.replace('OlimLatora');
//     }, 1 * 60 * 1000);
//     return () => clearInterval(secTimer);
//   }, []);
//   return <TfilotTimeList olimLatoraList={olimLatoraList} />;
// };

const TfilotTimeScreen = ({navigation, tfilotTimeList}) => {
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        navigation.replace('OlimLatora');
      }, 1 * 60 * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation]),
  );
  return <TfilotTimeList tfilotTimeList={tfilotTimeList} />;
};

export default TfilotTimeScreen;
