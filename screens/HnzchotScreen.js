import React, {useEffect} from 'react';
import HnzchotList from '../components/HnzchotList';
import {useFocusEffect} from '@react-navigation/native';
const HnzchotScreen = ({
  navigation,
  hnzchotList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const checkOptions = (changeOptions, reaplaseScreanName, navigation) => {
    switch (changeOptions) {
      case changeOptions.zmanim.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      case changeOptions.GeneralMessages.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case changeOptions.tfilotTimes.length >= 1:
        return navigation.replace(reaplaseScreanName.TfilotTime);
      case changeOptions.hnzchots.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      default:
        return navigation.replace(reaplaseScreanName.Hnzchot);
    }
  };
  useEffect(() => {
    let secTimer = setInterval(() => {
      // checkOptions(changeOptions, reaplaseScreanName, navigation);
      switch (changeOptions) {
        case changeOptions.zmanim.length >= 1:
          return navigation.replace(reaplaseScreanName.GeneralMessages);
        case changeOptions.GeneralMessages.length >= 1:
          return navigation.replace(reaplaseScreanName.Hnzchot);
        case changeOptions.tfilotTimes.length >= 1:
          return navigation.replace(reaplaseScreanName.TfilotTime);
        case changeOptions.hnzchots.length >= 1:
          return navigation.replace(reaplaseScreanName.OlimLatora);
        default:
          return navigation.replace(reaplaseScreanName.Hnzchot);
      }
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
  return <HnzchotList hnzchotList={hnzchotList} />;
};
// const HnzchotScreen = ({navigation, hnzchotList}) => {
//   useFocusEffect(
//     React.useCallback(() => {
//       let secTimer = setTimeout(() => {
//         navigation.replace('GeneralMessages');
//       }, 1 * 60 * 1000);
//       return () => clearTimeout(secTimer);
//     }, [navigation]),
//   );
//   return <HnzchotList hnzchotList={hnzchotList} />;
// };

export default HnzchotScreen;
