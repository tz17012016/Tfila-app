import React, {useEffect, useRef} from 'react';
import WelcomeTime from '../components/WelcomeTime';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
const WelcomeTimeScreen = ({
  zmanimsList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case refCounter.current.TfilotTime?.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case refCounter.current.OlimLatora?.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case refCounter.current.Hnzchot?.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case refCounter.current.GeneralMessages?.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case Object.keys(refCounter.current.Zmanim).length >= 1:
        return navigation.replace(reaplaseScreanName.Zmanim);
      default:
        return navigation.replace(reaplaseScreanName.WelcomeTime);
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
  return <WelcomeTime zmanimsList={zmanimsList} />;
};
// const WelcomeTimeScreen = ({navigation, zmanimsList}) => {
//   useFocusEffect(
//     React.useCallback(() => {
//       let secTimer = setTimeout(() => {
//         navigation.replace('TfilotTime');
//       }, 1 * 60 * 1000);
//       return () => clearTimeout(secTimer);
//     }, [navigation]),
//   );
//   return <WelcomeTime zmanimsList={zmanimsList} />;
// };

export default WelcomeTimeScreen;
