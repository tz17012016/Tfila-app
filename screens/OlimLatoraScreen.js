import React, {useEffect, useRef} from 'react';
import OlimLatoraList from '../components/OlimLatoraList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
const OlimLatoraScreen = ({
  olimLatoraList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case Object.keys(refCounter.current.Zmanim).length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      case refCounter.current.TfilotTime?.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      default:
        return navigation.replace(reaplaseScreanName.OlimLatora);
    }
  };
  // useEffect(() => {
  //   let secTimer = setInterval(() => {
  //     checkOptions(refCounter, reaplaseScreanName, navigation);
  //   }, 5 * 1000);
  //   return () => clearInterval(secTimer);
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, 50 * 1000);
      return () => clearTimeout(secTimer);
    }, []),
  );
  return <OlimLatoraList olimLatoraList={olimLatoraList} />;
};
// const OlimLatoraScreen = ({navigation, olimLatoraList}) => {
//   useFocusEffect(
//     React.useCallback(() => {
//       let secTimer = setTimeout(() => {
//         navigation.replace('Hnzchot');
//       }, 1 * 60 * 1000);
//       return () => clearTimeout(secTimer);
//     }, [navigation]),
//   );
//   return <OlimLatoraList olimLatoraList={olimLatoraList} />;
// };

export default OlimLatoraScreen;
