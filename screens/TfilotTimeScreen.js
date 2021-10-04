import React, {useEffect, useRef} from 'react';
import TfilotTimeList from '../components/TfilotTimeList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
const TfilotTimeScreen = ({
  tfilotTimeList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.OlimLatora?.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case Object.keys(refCounter.current.Zmanim).length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      default:
        return navigation.replace(reaplaseScreanName.TfilotTime);
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
  return <TfilotTimeList tfilotTimeList={tfilotTimeList} />;
};

// const TfilotTimeScreen = ({navigation, tfilotTimeList}) => {
//   useFocusEffect(
//     React.useCallback(() => {
//       let secTimer = setTimeout(() => {
//         navigation.replace('OlimLatora');
//       }, 1 * 60 * 1000);
//       return () => clearTimeout(secTimer);
//     }, []),
//   );
//   return <TfilotTimeList tfilotTimeList={tfilotTimeList} />;
// };

export default TfilotTimeScreen;
