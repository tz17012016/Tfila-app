import React, {useEffect} from 'react';
import OlimLatoraList from '../components/OlimLatoraList';
import {useFocusEffect} from '@react-navigation/native';
const OlimLatoraScreen = ({
  navigation,
  olimLatoraList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const checkOptions = (changeOptions, reaplaseScreanName, navigation) => {
    switch (changeOptions) {
      case changeOptions.GeneralMessages.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case changeOptions.zmanim.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case changeOptions.olimLatoras.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case changeOptions.hnzchots.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      default:
        return navigation.replace(reaplaseScreanName.OlimLatora);
    }
  };
  useEffect(() => {
    let secTimer = setInterval(() => {
      // checkOptions(changeOptions, reaplaseScreanName, navigation);
      switch (changeOptions) {
        case changeOptions.GeneralMessages.length >= 1:
          return navigation.replace(reaplaseScreanName.Hnzchot);
        case changeOptions.zmanim.length >= 1:
          return navigation.replace(reaplaseScreanName.GeneralMessages);
        case changeOptions.olimLatoras.length >= 1:
          return navigation.replace(reaplaseScreanName.TfilotTime);
        case changeOptions.hnzchots.length >= 1:
          return navigation.replace(reaplaseScreanName.OlimLatora);
        default:
          return navigation.replace(reaplaseScreanName.OlimLatora);
      }
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
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
