import React, {useEffect} from 'react';
import WelcomeTime from '../components/WelcomeTime';
import {useFocusEffect} from '@react-navigation/native';
const WelcomeTimeScreen = ({
  navigation,
  zmanimsList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const checkOptions = (changeOptions, reaplaseScreanName, navigation) => {
    switch (changeOptions) {
      case changeOptions.olimLatoras.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case changeOptions.hnzchots.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case changeOptions.GeneralMessages.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case changeOptions.zmanim.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      default:
        return navigation.replace(reaplaseScreanName.WelcomeTime);
    }
  };
  useEffect(() => {
    let secTimer = setInterval(() => {
      // checkOptions(changeOptions, reaplaseScreanName, navigation);
      switch (changeOptions) {
        case changeOptions.olimLatoras.length >= 1:
          return navigation.replace(reaplaseScreanName.TfilotTime);
        case changeOptions.hnzchots.length >= 1:
          return navigation.replace(reaplaseScreanName.OlimLatora);
        case changeOptions.GeneralMessages.length >= 1:
          return navigation.replace(reaplaseScreanName.Hnzchot);
        case changeOptions.zmanim.length >= 1:
          return navigation.replace(reaplaseScreanName.GeneralMessages);
        default:
          return navigation.replace(reaplaseScreanName.WelcomeTime);
      }
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
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
