import React, {useEffect} from 'react';
import TfilotTimeList from '../components/TfilotTimeList';
import {useFocusEffect} from '@react-navigation/native';
const TfilotTimeScreen = ({
  navigation,
  tfilotTimeList,
  reaplaseScreanName,
  changeOptions,
}) => {
  const checkOptions = (changeOptions, reaplaseScreanName, navigation) => {
    switch (changeOptions) {
      case changeOptions.hnzchots.length >= 1:
        return navigation.replace(reaplaseScreanName.OlimLatora);
      case changeOptions.GeneralMessages.length >= 1:
        return navigation.replace(reaplaseScreanName.Hnzchot);
      case changeOptions.zmanim.length >= 1:
        return navigation.replace(reaplaseScreanName.GeneralMessages);
      default:
        return navigation.replace(reaplaseScreanName.TfilotTime);
    }
  };
  console.log(tfilotTimeList);
  useEffect(() => {
    let secTimer = setInterval(() => {
      switch (changeOptions) {
        case changeOptions.hnzchots.length >= 1:
          return navigation.replace(reaplaseScreanName.OlimLatora);
        case changeOptions.GeneralMessages.length >= 1:
          return navigation.replace(reaplaseScreanName.Hnzchot);
        case changeOptions.zmanim.length >= 1:
          return navigation.replace(reaplaseScreanName.GeneralMessages);
        default:
          return navigation.replace(reaplaseScreanName.TfilotTime);
      }
    }, 1 * 60 * 1000);
    return () => clearInterval(secTimer);
  }, []);
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
