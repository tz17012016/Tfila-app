import React, {useEffect} from 'react';
import HnzchotList from '../components/HnzchotList';
import {useFocusEffect} from '@react-navigation/native';
// const HnzchotScreen = ({navigation, hnzchotList}) => {
//   useEffect(() => {
//     let secTimer = setInterval(() => {
//       navigation.replace('GeneralMessages');
//     }, 1 * 60 * 1000);
//     return () => clearInterval(secTimer);
//   }, []);
//   return <HnzchotList hnzchotList={hnzchotList} />;
// };
const HnzchotScreen = ({navigation, hnzchotList}) => {
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        navigation.replace('GeneralMessages');
      }, 1 * 60 * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation]),
  );
  return <HnzchotList hnzchotList={hnzchotList} />;
};

export default HnzchotScreen;
