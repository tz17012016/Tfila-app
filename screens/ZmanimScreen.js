import React, {useEffect} from 'react';
import ZmnimList from '../components/ZmnimList';
import {useFocusEffect} from '@react-navigation/native';
const ZmanimScreen = ({
  navigation,
  zmanimsList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const checkOptions = (changeOptions, reaplaseScreanName, navigation) => {
    switch (changeOptions) {
      case changeOptions.TfilotTime.length >= 1:
        return navigation.replace(reaplaseScreanName.WelcomeTime);
      case changeOptions.olimLatoras.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case changeOptions.hnzchots.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case changeOptions.GeneralMessages.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case changeOptions.zmanim.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      default:
        return navigation.replace(reaplaseScreanName.Zmanim);
    }
  };
  useEffect(() => {
    let secTimer = setInterval(() => {
      //checkOptions(changeOptions, reaplaseScreanName, navigation);
      switch (true) {
        case changeOptions.TfilotTime.length >= 1:
          return navigation.replace(reaplaseScreanName.WelcomeTime);
        case changeOptions.olimLatoras.length >= 1:
          return navigation.replace(reaplaseScreanName.TfilotTime);
        case changeOptions.hnzchots.length >= 1:
          return navigation.replace(reaplaseScreanName.OlimLatora);
        case changeOptions.GeneralMessages.length >= 1:
          return navigation.replace(reaplaseScreanName.Hnzchot);
        case changeOptions.zmanim.length >= 1:
          return navigation.replace(reaplaseScreanName.GeneralMessages);
        default:
          return navigation.replace(reaplaseScreanName.Zmanim);
      }
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <ZmnimList zmanimsList={zmanimsList} />;
};

// const ZmanimScreen = ({navigation, zmanimsList}) => {
//   useFocusEffect(
//     React.useCallback(() => {
//       let secTimer = setTimeout(() => {
//         navigation.replace('WelcomeTime');
//       }, 1 * 60 * 1000);
//       return () => clearTimeout(secTimer);
//     }, [navigation]),
//   );
//   return <ZmnimList zmanimsList={zmanimsList} />;
// };

export default ZmanimScreen;
/**
 *   useEffect(() => {
    let secTimer = setInterval(() => {
      navigation.replace('GeneralMessages');
    }, 2 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <HnzchotList />;
};
 */
